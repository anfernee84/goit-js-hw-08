import Player from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', _.throttle(timeHandler, 1000));
function timeHandler(data) {
  console.log(data);
}

// player.on(‘timeupdate’, _.throttle(onUpdateTime, 1000));
