var deck = bespoke.from('#presentation', [
  bespoke.plugins.classes(),
  // scale plugin will attempt to use zoom in Chrome unless we specify transform
  bespoke.plugins.scale('transform'),
  bespoke.plugins.keys(),
  bespoke.plugins.fullscreen(),
  bespoke.plugins.forms()
]);

// expose API to other applications
window.deck = deck;
