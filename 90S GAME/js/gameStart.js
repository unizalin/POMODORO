
const gameStart = { 
  key : 'gameStart',
  preload: function(){
    //載入資源
    this.load.image('sky1','images/bg/L1_sky.png')
    this.load.image('mountain_main','images/bg/L1_mountain_mian.png')
    this.load.image('mountain_pack','images/bg/L1_mountain_pack.png')
    this.load.image('street','images/bg/L1_street.png')
    this.load.spritesheet('user','images/player.png', { frameWidth: 144, frameHeight: 120 });    

    this.load.image('logo','../images/txt-title.png')
    this.load.image('startBtn','../images/btn-press-start.png')
    this.load.image('playerEnd','../images/player-end.png')

  },
  create: function () {
    // 創造
    // tileSprite(x,y,w,h)
    this.sky1 = this.add.tileSprite(w/2,120,w,258,'sky1')
    this.street = this.add.tileSprite(w/2,500,w,550,'street')
    this.mountain_pack = this.add.tileSprite(w/2,110,w,240,'mountain_pack')
    this.mountain_main = this.add.tileSprite(w/2,130,w,240,'mountain_main')
    this.footer = this.add.tileSprite(w/2,650+45,w,90,'street')

    this.logo = this.add.image(w/2,h/2,'logo')
    this.startBtn = this.add.image(w/2,h/2 +150,'startBtn')
    this.startBtn.setScale(0.5)
    this.startBtn.setInteractive()//監聽
    this.startBtn.on('pointerdown', () => this.scene.start('gamePlay'))//切換畫面
  },
  update: function () {
    // 更新
    this.sky1.tilePositionX += 2
    this.street.tilePositionX += 3 
    this.mountain_pack.tilePositionX += 4 
    this.mountain_main.tilePositionX += 4 
  }

}