const getRandom = (max, min) =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
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

    this.monsterArr = [];    // 存放所有怪物實體
    this.monsterArr2 = [];   // 存放所有怪物實體2
    this.masIdx = 0;         // 怪物索引
    this.masIdx2 = 1;        // 怪物索引2
    this.gameStop = false;   // 控制遊戲是否停止
  },
  create: function () {
    // 創造
    // tileSprite(x,y,w,h)
    this.sky1 = this.add.tileSprite(w/2,120,w,258,'sky1')
    this.street = this.add.tileSprite(w/2,500,w,550,'street')
    this.mountain_pack = this.add.tileSprite(w/2,110,w,240,'mountain_pack')
    this.mountain_main = this.add.tileSprite(w/2,130,w,240,'mountain_main')


    const masPos = [
      {name: 'L1_block_1', x: w + 200, y: 240, w: 136, h: 81},
      {name: 'L1_block_1', x: w + 20, y: 660, w: 136, h: 81},
      {name: 'L1_block_1', x: w + 400, y: 0, w: 136, h: 81},
      {name: 'L1_block_1', x: w + 63, y: 480, w: 136, h: 81},
      {name: 'L1_block_2', x: w + 320, y: 540 , w: 134, h: 63},
      {name: 'L1_block_2', x: w + 620, y: 360 , w: 134, h: 63},
      {name: 'L1_block_2', x: w + 140, y: 420 , w: 134, h: 63},
      {name: 'L1_block_2', x: w + 260, y: 220 , w: 134, h: 63},
  ]




    // L1_block_1 360-81= 240  ~ 720-81=640    360-63 = 300 ~ 720-63 = 660
    // this.L1_block_1 = this.add.tileSprite(w/2,h-81,136,81,'L1_block_1')
    this.L1_block_2 = this.add.tileSprite(w+200,h-63,134,63,'L1_block_2')
    // L1_block_2 
    // this.footer = this.add.tileSprite(w/2,650+45,w,90,'street')
    
  

  console.log(this.monsterArr)



    // 角色設定值
    this.player= this.physics.add.sprite(100,350,'user')
    this.player.setScale(0.7) // 設定縮放大小
    this.player.setBounce(0.7) // 設定彈跳值
    this.player.setSize(120,120,0) //設定角色碰撞邊界,可在
    this.player.setCollideWorldBounds(true); //角色邊界限制

    this.physics.add.collider(this.player,this.mountain_main)// 將把會碰撞一起的東西綁在一起
    this.physics.add.existing(this.mountain_main)
    this.mountain_main.body.immovable= true
    this.mountain_main.body.moves=false

    this.physics.add.collider(this.player,this.L1_block_1)// 將把會碰撞一起的東西綁在一起
    this.physics.add.collider(this.player,this.L1_block_2)// 將把會碰撞一起的東西綁在一起
    // this.physics.add.existing(this.L1_block_1)
    // this.physics.add.existing(this.L1_block_2)

    // this.L1_block_1.body.immovable= true
    // this.L1_block_1.body.moves=false



  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }
  const addPhysics = GameObject =>{
    this.physics.add.existing(GameObject);
    // this.physics.add.collider(this.player,GameObject);

    GameObject.body.immovable = true;
    GameObject.body.moves = false;
  }

  const hittest = (player, rock) => {
    this.gameStop = true;
    this.player.setBounce(0);
    this.player.setSize(110, 100, 0);
    this.player.anims.play('deel', true);
    clearInterval(gametime);
    let gameover = this.add.image(cw / 2, ch / 2 - 40, 'gameover');
    gameover.setScale(0.8);
    let tryAgainBtn = this.add.image(cw / 2, ch / 2 + 30, 'tryAgainBtn');
    tryAgainBtn.setScale(0.6);
    tryAgainBtn.setInteractive();
    tryAgainBtn.on('pointerdown', () => this.scene.start('gameStart'));
}
  // 產生怪物
  for (let i = 0; i < 10; i++) {
    let BoolIdx = getRandom(7, 0);
    // let BoolIdx2 = getRandom(7, 0);
    this['rock'+ i] = this.add.tileSprite(w+getRandom(200,4000), getRandom(240,660), masPos[BoolIdx].w, masPos[BoolIdx].h, masPos[BoolIdx].name);
    this.monsterArr.push(this['rock'+ i]);
    addPhysics(this['rock'+i]);
    console.log(this.monsterArr)
    // addPhysics(this['rockB'+i]);
    this.physics.add.collider(this.player, this['rock'+i], hittest);
    // this.physics.add.collider(this.player, this['rockB'+i]);
}
  
    
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
    this.anims.create({
      key: 'deal',
      frames: this.anims.generateFrameNumbers('user',{start:6,end:6}) ,
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
    if(this.gameStop) return
    // 更新
    this.sky1.tilePositionX += 2 * this.speedLv
    this.street.tilePositionX += 3 * this.speedLv
    this.mountain_pack.tilePositionX += 2.4 * this.speedLv
    this.mountain_main.tilePositionX += 4 * this.speedLv
    
    for (let i = 0; i < this.monsterArr.length; i++) {
      this.monsterArr[i].x -= 3 * this.speedLv;
      if(this.monsterArr[i].x <= -100){
          this.monsterArr[i].x = w + 200;
          this.masIdx = getRandom(this.monsterArr.length - 1, 0);
      }
  }

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