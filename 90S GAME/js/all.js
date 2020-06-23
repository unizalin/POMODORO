const w = 1280;
const h = 720;

const config = {
  //設定渲染引擎哪一種渲染
  type: Phaser.AUTO,
  width: w,
  height: h,
  parent: 'app',
  // 物力引擎
  physics:{
    default: 'arcade',
    arcade:{
      gravity:{
        y: 0
      },
      debug: true
    }
  },
  scene: [gameStart,gamePlay,]

}

const game = new Phaser.Game(config)