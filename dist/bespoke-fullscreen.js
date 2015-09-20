/*!
 * bespoke-fullscreen v1.0.0-dev
 *
 * Copyright 2015, Dan Allen
 * This content is released under the MIT license
 */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.bespoke||(g.bespoke = {}));g=(g.plugins||(g.plugins = {}));g.fullscreen = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var KEYCODE = { f: 70, f11: 122 },
      fullscreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled || document.msFullscreenEnabled,
      toggleFullscreen = function() {
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
          toggleFullscreen();
          if (keyCode === KEYCODE.f11) {
            e.preventDefault();
          }
        }
      }, false);
    }
  };
};

},{}]},{},[1])(1)
});