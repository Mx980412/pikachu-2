import string from "./css.js";

//声明对象
const player = {
  //声明变量
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  //事件
  events: {
    //暂停功能
    "#btnPause": "pause",
    //播放功能
    "#btnPlay": "play",
    //慢速功能
    "#btnSlow": "slow",
    //中速功能
    "#btnNormal": "normal",
    //快速功能
    "#btnFast": "fast",
  },
  n: 1,
  //初始化代码
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  //绑定函数
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause/play/slow...这些字符串
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(id);
      return;
    }
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight; //滚动条定位到内容的高度（其实还要减去滚动条本身的高度的）
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

//对象初始化
player.init();
