module.exports = function() {
  return function(deck) {
    var KEY_F = 70, KEY_F11 = 122, EVT_KEYDOWN = 'keydown',
      toggleFullscreen = function() {
        var el, func;
        if (document.fullscreenElement || document.webkitFullscreenElement ||
            document.mozFullScreenElement || document.msFullscreenElement) {
          // NOTE does not exit from full screen if initiated by F11 outside this window
          func = (el = document).exitFullscreen ||
              el.webkitExitFullscreen || el.mozCancelFullScreen || el.msExitFullscreen;
        }
        else {
          func = (el = document.documentElement).requestFullscreen ||
              el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        }
        if (func) func.apply(el);
      },
      isModifierPressed = function(e) {
        return !!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey);
      },
      onKeydown = function(e) {
        var key = e.which;
        if ((key === KEY_F || key === KEY_F11) && !isModifierPressed(e)) {
          toggleFullscreen();
          if (key === KEY_F11) e.preventDefault();
        }
      };
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled || document.msFullscreenEnabled) {
      deck.on('destroy', function() { document.removeEventListener(EVT_KEYDOWN, onKeydown); });
      document.addEventListener(EVT_KEYDOWN, onKeydown);
    }
  };
};
