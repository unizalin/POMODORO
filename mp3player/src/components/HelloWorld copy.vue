<template>
  <div class="play_form">
    <youtube :video-id="videoId" ref="youtube"  style="display:none"></youtube>
    <button class="" @click="playing">youtube play</button>
    <div class="top">
      <audio controls ref="audio" @canplay="getDuration" @timeupdate='onTimeUpdateListener' id="myMp3">
        <source id="test" src="../assets/music/Jim Yosef - Let You Go [NCS Release].mp3" type="audio/mpeg">
      </audio>
      <div class="cdPlat "><img :class="isPlay ? 'cdPlayIngRotate' : ''" src="../assets/img/Jim Yosef - Let You Go.jpg" @click="isPlay = !isPlay " alt=""><div class="insideCicle"></div></div>
      <div class="changeSong">
        <div class="back"></div>
        <div class="next"></div>
      </div>
    </div>
    <div class="controlList">
      <div class="musicInfo">
        <div class="artist">Jim Yosef</div>
        <div class="songName">Let You Go</div>
      </div>
      <div class="musicStatus" :class="isPlay ? 'pause' : 'play'"  @click="isPlay = !isPlay, isPlay ? playing() : paused();"></div>
      <div class="musicVolume">
        <input type="range" max="100" min="0" :value="volume" @change="changeVolume">
      </div>
    </div>
    <div class="timeLine">
      <div class="timeCurrant">{{currentTime}}</div>
      <div class="timeControl">
        <input type="range" max="100" min="0" :value="progress" @change="changeProgress">
      </div>
      <div class="timeTotal">{{duration}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      videoId: 'XX5nL9EJiWU',
      nowPlayIng:{
        songMame: 'GET UP',
        singer: 'TOKYO MACHINE & Guy Arthur',
        videoId:'euw0w42g27',
        pic:'https://linkstorage.linkfire.com/medialinks/images/f414f928-e610-4968-857f-a5fdb038084d/artwork-440x440.jpg',
      },
      isPlay: false,
      playList: [{
        songMame: 'GET UP',
        singer: 'TOKYO MACHINE & Guy Arthur',
        videoId:'euw0w42g27',
        pic:'https://linkstorage.linkfire.com/medialinks/images/f414f928-e610-4968-857f-a5fdb038084d/artwork-440x440.jpg',
      },{
        songMame: 'Let You Go',
        singer: 'Jim Yosef',
        videoId:'pQWZzoB7P1E',
        pic:'https://linkstorage.linkfire.com/medialinks/images/7b42ba6d-aea4-42c5-9ea6-7637c38da647/artwork-440x440.jpg',
      },{
        songMame: 'Eternal',
        singer: 'Marin Hoxha & Caravn',
        videoId:'9Jk9hQ4wUto',
        pic:'https://linkstorage.linkfire.com/medialinks/images/b5c70a68-414f-4461-8f0a-587204073f9a/artwork-440x440.jpg',
      }
      ],
      durationSec: '',
      currentTime: '00:00',
      duration: '00:00',
      volume:'0',
      progress:'0'
    };
  },
  methods: {
    getDuration(){
      let time = Math.floor(this.$refs.audio.duration);
      console.log('getDuration',this.$refs.audio.readyState)

      this.durationSec = time;
      this.duration =`0${(time/60)<1 ? 0 : Math.floor(time/60)}:${time%60< 10 ? `0${time%60}` : time%60}`;
      this.volume = this.$refs.audio.volume*100;
    },
    play() {
      const mp3Player = document.getElementById('myMp3')
      mp3Player.play();
    },
    pause() {
      const mp3Player = document.getElementById('myMp3')
      mp3Player.pause();
    },
    playing(){
      console.log(this.$refs.youtube.player)
      this.$refs.youtube.player.playVideo()
      console.log(this.$refs.youtube.player.getDuration())

    },
    paused(){
      console.log(this.$refs.youtube.player)
      this.$refs.youtube.player.pauseVideo()
    },
    getPlayerDuration(){
       this.$refs.youtube.player.getDuration()
      console.log(this.$refs.youtube.player.getDuration().resolve(value))
    },
    onTimeUpdateListener(){
      console.log('getDuration',this.$refs.audio.readyState)
      let time = Math.floor(this.$refs.audio.currentTime);
      let totalTime = Math.floor(this.$refs.audio.duration);
      this.currentTime = `${(time/60)<1 ? '00' : `0${Math.floor(time/60)}`}:${time%60< 10 ? `0${time%60}` : time%60}`
      this.progress = time/totalTime*100;
    },
    changeVolume(e){
      const mp3Player = document.getElementById('myMp3')
      this.volume=e.target.value
      mp3Player.volume=e.target.value/100
    },
    changeProgress(e){
      let totalTime = this.durationSec;
      const mp3Player = document.getElementById('myMp3')
      this.progress=e.target.value
      mp3Player.currentTime= Math.floor(totalTime*e.target.value/100)
    },
  },
  mounted(){
    // const mp3Player = document.getElementById('myMp3')
    console.log('mounted',this.$refs.audio.readyState)
    console.log('mounted',this.$refs.audio)
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  position: relative;
  box-sizing: border-box;
  outline: 1px solid black;
}
iframe{
  width: 0;
  height: 0;
  display: none !important;
}
.play_form{
  max-width: 800px;
  max-height: 800px;
}
.top{
  position: relative;
  .changeSong{
    position: absolute;
    top: 20px;
    right: 32px;
    .back{
      margin-bottom: 20px;
    }
  }
} 
.cdPlat{
  width: 600px;
  height: 600px;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 50%;
  img {
    width: 100%;
    border-radius: 50%;
    animation: cdPlaying 4s infinite linear;
    animation-fill-mode: forwards;
    animation-delay: -0.1s;
    animation-play-state: paused;
    @keyframes cdPlaying {
      0%{
        transform: rotate(0deg);
      }
      100%{
        transform: rotate(1turn);
      }
    }

  }
  .cdPlayIngRotate{
    animation-play-state: running;
  }
  .cdPlayIngRotate{
  }

  .insideCicle {
    z-index: 3;
    background-color: #fff;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 50%;
  }
}

.buttonList {
  display: flex;
}
.back,.next,.play,.pause {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 2px #333;
  cursor: pointer;
  position: relative;
}
.back::before {
  content: ' ';
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}
.back::after {
  content: '' ;
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 26px 15px 0;
  border-color: transparent #007bff transparent transparent;
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translateY(-50%);
}

.play::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 26.0px;
  border-color: transparent transparent transparent #007bff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.pause::before{
  content:'';
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}
.pause::after{
  content:'';
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  right: 30%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}

.next::before{
  content:'';
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}
.next::after{
  content:'';
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 26.0px;
  border-color: transparent transparent transparent #007bff;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
}

.controlList{
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .musicStatus{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
.timeLine{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
