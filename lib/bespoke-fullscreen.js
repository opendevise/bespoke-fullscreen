module.exports = function(options) {
  return function(deck) {
    var KEYCODE = { f: 70, f11: 122 },
      fullscreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled || document.msFullscreenEnabled,
      toggleUserFullscreen = function() {
        var element, method;
        // NOTE does not exit from full screen if initiated by F11 outside this window
        if (document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement) {
          method = (element = document).exitFullscreen || element.webkitExitFullscreen ||
              element.mozCancelFullScreen || element.msExitFullscreen;
        }
        else {
          method = (element = document.documentElement).requestFullscreen || element.webkitRequestFullscreen ||
              element.mozRequestFullScreen || element.msRequestFullscreen;
        }
        if (method) method.apply(element);
      },
      isModifierKeyDown = function(e) {
        return !!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey);
      };

    if (fullscreenEnabled) {
      document.addEventListener('keydown', function(e) {
        var keyCode = e.which;
        if ((keyCode === KEYCODE.f || keyCode === KEYCODE.f11) && !isModifierKeyDown(e)) {
          toggleUserFullscreen();
          if (keyCode === KEYCODE.f11) {
            e.preventDefault();
          }
        }
      }, false);
    }
  };
};
