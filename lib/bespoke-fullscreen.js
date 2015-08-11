module.exports = function(options) {
  return function(deck) {
    var fullScreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled || document.msFullscreenEnabled,
      toggleUserFullScreen = function() {
        var element, method;
        // NOTE does not exit from full screen initiated by F11
        if (document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement) {
          method = (element = document).exitFullscreen || element.webkitExitFullscreen ||
              element.mozCancelFullScreen || element.msExitFullscreen;
        }
        else {
          method = (element = document.documentElement).requestFullscreen || element.webkitRequestFullscreen ||
              element.mozRequestFullScreen || element.msRequestFullscreen;
        }
        if (method) { method.apply(element); }
      };

    if (fullScreenEnabled) {
      document.addEventListener('keydown', function(e) {
        if (e.which == 70) { // f
          toggleUserFullScreen();
        }
      });
    }
  };
};
