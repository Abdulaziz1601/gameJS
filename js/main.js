'use strict';

const cvs = document.querySelector('#canvas'),
      ctx = cvs.getContext('2d'),
      bird = new Image(),
      bg = new Image(),
      fg = new Image(),
      pipeUp = new Image(),
      pipeBottom = new Image();

bird.src = 'img/bird.png';
bg.src = 'img/bg.png';
fg.src = 'img/fg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';



