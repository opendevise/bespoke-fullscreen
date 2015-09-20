var isWebKit = 'webkitAppearance' in document.documentElement.style;
var deck = bespoke.from('.deck', [
  bespoke.plugins.classes(),
  bespoke.plugins.nav(),
  bespoke.plugins.scale(isWebKit ? 'zoom' : 'transform'),
  bespoke.plugins.fullscreen(),
  bespoke.plugins.forms()
]);

// expose API to other applications
window.deck = deck;
