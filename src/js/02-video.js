import { save, load } from './storage';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// let _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(load('videoplayer-current-time') || 0);

player.on('timeupdate', throttle(timeHandler, 1000));
function timeHandler(data) {
  console.log(data);
  save('videoplayer-current-time', data.seconds);
}

// player.on(‘timeupdate’, _.throttle(onUpdateTime, 1000));
