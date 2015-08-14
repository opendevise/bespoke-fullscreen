module.exports = function(options) {
  return function(deck) {
    var KEYCODE_F = 70,
      fullscreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled || document.msFullscreenEnabled,
      toggleUserFullscreen = function() {
        var element, method;
        // NOTE does not exit from full screen if initiated by F11
        if (document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement) {
          method = (element = document).exitFullscreen || element.webkitExitFullscreen ||
              element.mozCancelFullScreen || element.msExitFullscreen;
        }
        else {
          method = (element = document.documentElement).requestFullscreen || element.webkitRequestFullscreen ||
              element.mozRequestFullScreen || element.msRequestFullscreen;
        }
        if (method) {
          method.apply(element);
        }
      };

    if (fullscreenEnabled) {
      document.addEventListener('keydown', function(e) {
        if (e.which === KEYCODE_F) {
          toggleUserFullscreen();
        }
      }, false);
    }
  };
};
