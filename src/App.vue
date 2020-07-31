<template>
  <div id="app">
    <div class="icon">
      <div class="label">ICON size: 20</div>
      <svg v-svg symbol="close" size="20"></svg>
    </div>
    <div class="icon">
      <div class="label">ICON size: 30</div>
      <svg v-svg symbol="close" size="30"></svg>
    </div>
    <div class="icon">
      <div class="label">ICON size: 40</div>
      <svg v-svg symbol="close" size="40"></svg>
    </div>
    <div class="icon">
      <div class="label">ICON size: 50</div>
      <svg v-svg symbol="close" size="50"></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
