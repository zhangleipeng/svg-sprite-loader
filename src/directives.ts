import Vue from 'vue';

function renderSvg(el: HTMLElement): void {
  const symbol = el.getAttribute('symbol') || '';
  const size = el.getAttribute('size')!.split(' ');
  let w: string;
  let h: string;
  if (size.length === 1) {
    [w] = size;
    h = w;
  } else if (size.length === 2) {
    [w, h] = size;
  } else {
    throw new Error(`invalid size for svg: ${symbol}`);
  }
  el.setAttribute('viewBox', `0 0 ${w} ${h}`);
  el.setAttribute('width', w);
  el.setAttribute('height', h);
  if (el.innerHTML.indexOf(`#${symbol}"`) === -1) {
    el.innerHTML = `<use xlink:href="#icon-${symbol}"></use>`;
    el.style.fill = 'currentColor';
  }
}

Vue.directive('svg', {
  inserted: (el) => {
    if (el.tagName.toUpperCase() !== 'SVG') {
      throw new Error(`v-svg is not valid for ${el.tagName}`);
    }
    renderSvg(el);
  },
  update: (el) => {
    renderSvg(el);
  },
});
