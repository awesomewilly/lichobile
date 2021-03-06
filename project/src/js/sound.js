var settings = require('./settings');

function shouldPlay() {
  return settings.general.sound();
}

var lla, media;

if (window.cordova.platformId === 'ios')
  media = {
    move: 'sounds/move.aifc',
    capture: 'sounds/capture.aifc',
    dong: 'sounds/dong.aifc'
  };
else
  media = {
    move: 'sounds/move.mp3',
    capture: 'sounds/capture.mp3',
    dong: 'sounds/dong.mp3'
  };



document.addEventListener('deviceready', function() {
  if (window.hotjs) {
    window.hotjs.Audio.init();
    lla = window.hotjs.Audio;
  } else {
    lla = window.plugins.LowLatencyAudio;
  }

  lla.preloadFX('move', media.move, function() {}, function(err) {
    console.log(err);
  });
  lla.preloadFX('capture', media.capture, function() {}, function(err) {
    console.log(err);
  });
  lla.preloadFX('dong', media.dong, function() {}, function(err) {
    console.log(err);
  });
}, false);


module.exports = {
  move: function() {
    if (shouldPlay()) lla.play('move');
  },
  capture: function() {
    if (shouldPlay()) lla.play('capture');
  },
  dong: function() {
    if (shouldPlay()) lla.play('dong');
  }
};
