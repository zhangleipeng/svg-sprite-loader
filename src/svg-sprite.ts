function requireAll(r: __WebpackModuleApi.RequireContext): void {
  r.keys().forEach(r);
}

requireAll(require.context('./assets/images/icons', true, /\.svg$/));
