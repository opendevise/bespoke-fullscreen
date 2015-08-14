var deck = bespoke.from('#presentation', [
  bespoke.plugins.classes(),
  // scale plugin will attempt to use zoom in Chrome unless we specify transform
  bespoke.plugins.scale(),
  //bespoke.plugins.scale('transform'),
  // transform-group is a proposed change; see https://github.com/markdalgleish/bespoke-scale/pull/5
  //bespoke.plugins.scale('transform-group'),
  bespoke.plugins.keys(),
  bespoke.plugins.fullscreen(),
  bespoke.plugins.forms()
]);

// expose API to other applications
window.deck = deck;
