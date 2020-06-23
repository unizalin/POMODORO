
const gamePlay = { 
  key : 'gamePlay',
  preload: function(){
    //載入資源
    this.load.image('sky1','images/bg/L1_sky.png')
    this.load.image('mountain_main','images/bg/L1_mountain_mian.png')
    this.load.image('mountain_pack','images/bg/L1_mountain_pack.png')
    this.load.image('street','images/bg/L1_street.png')
    this.load.image('L1_block_1','images/bg/L1_block_1.png')
    this.load.image('L1_block_2','images/bg/L1_block_2.png')

    this.load.spritesheet('user','images/player.png', { frameWidth: 144, frameHeight: 120 });    

    this.timeInit = 30
    this.speedLv = 1
    this.gameStop = false
  },
  create: function () {
    // 創造
    // tileSprite(x,y,w,h)
    this.sky1 = this.add.tileSprite(w/2,120,w,258,'sky1')
    this.street = this.add.tileSprite(w/2,500,w,550,'street')
    this.mountain_pack = this.add.tileSprite(w/2,110,w,240,'mountain_pack')
    this.mountain_main = this.add.tileSprite(w/2,130,w,240,'mountain_main')
    this.L1_block_1 = this.add.tileSprite(w/2,h/2,136,81,'L1_block_1')
    this.L1_block_2 = this.add.tileSprite(w/2,h/2-63,134,63,'L1_block_2')

    // this.footer = this.add.tileSprite(w/2,650+45,w,90,'street')
    
    this.player= this.physics.add.sprite(100,150,'user')
    this.player.setScale(0.7) // 設定縮放大小
    this.player.setBounce(0.7) // 設定彈跳值
    this.player.setSize(28,29,0) //設定角色碰撞邊界,可在
    this.player.setCollideWorldBounds(true); //角色邊界限制

    // this.physics.add.existing(this.footer)
    this.physics.add.collider(this.player,this.L1_block_1)// 將把會碰撞一起的東西綁在一起
    this.physics.add.collider(this.player,this.L1_block_2)// 將把會碰撞一起的東西綁在一起

    // this.footer.body.immovable= true
    // this.footer.body.moves=false
    
    //圖片動畫切換
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('user',{start:0,end:1}) ,
      frameRate: 5,
      repeat: -1
    })
    this.anims.create({
      key: 'speed',
      frames: this.anims.generateFrameNumbers('user',{start:4,end:5}) ,
      frameRate: 5,
      repeat: -1
    })
    this.player.anims.play('run',true )


    this.timeText = this.add.text(w-180,h-50,`TIME: ${this.timeInit}`,{color: '#333',fontSize: '20px'})

    let timer = setInterval(() => {
      this.timeInit--
      this.timeText.setText(`TIME: ${this.timeInit}`);
      if(this.timeInit<=20 && this.timeInit>10){
        this.speedLv = 1.75 
      }
      if(this.timeInit<=10 && this.timeInit>0){
        this.speedLv = 2.25
      }
      if(this.timeInit <=0){
        clearInterval(timer)
      }
    }, 1000);
  },
  update: function () {
    // 更新
    this.sky1.tilePositionX += 2 * this.speedLv
    this.street.tilePositionX += 3 * this.speedLv
    this.mountain_pack.tilePositionX += 4 * this.speedLv
    this.mountain_main.tilePositionX += 4 * this.speedLv


    const keyboard = this.input.keyboard.createCursorKeys()
    // let vm = this;
    if(keyboard.right.isDown){
      console.log('up')
      this.player.anims.play('speed',true )
      this.player.setVelocityX(200); // x 軸移動
      this.player.flipX = false // 水平翻轉
    }else if(keyboard.left.isDown){
      this.player.anims.play('speed',true )
      this.player.setVelocityX(-260); // x 軸移動
      this.player.flipX = true // 水平翻轉
    }else{
      this.player.anims.play('run',true)
      this.player.setVelocityX(0);
    }

    if(keyboard.up.isDown){
      this.player.setVelocityY(-200); // Y軸移動
    }else if(keyboard.down.isDown){
      this.player.setVelocityY(260); // Y軸移動
    }else{
      this.player.setVelocityY(0);
    }
  }

}