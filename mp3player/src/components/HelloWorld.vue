<template>
  <div class="play_form">
    <youtube :video-id="nowPlayIng.videoId" ref="youtube" @playing="play" style="display:none"></youtube>
    <div class="top">
      <div class="cdPlat ">
        <img :class="isPlay ? 'cdPlayIngRotate' : ''" :src="nowPlayIng.pic" @click="isPlay = !isPlay,isPlay ? playing() : paused(); " alt="albumn">
        <div class="insideCicle"></div>
      </div>
      <div class="changeSong">
        <div class="back" @click="changeSong(-1)"></div>
        <div class="next" @click="changeSong(+1)"></div>
      </div>
    </div>
    <div class="controlList">
      <div class="musicInfo">
        <div class="artist">{{nowPlayIng.artist}}</div>
        <div class="songName">{{nowPlayIng.songMame}}</div>
      </div>
      <div class="musicStatus" :class="isPlay ? 'pause' : 'play'"  @click="isPlay = !isPlay, isPlay ? playing() : paused();"></div>
      <div class="musicVolume">
        <input type="range" max="100" min="0" :value="volume" @change="changeVolume">
      </div>
    </div>
    <div class="timeLine">
      <div class="timeCurrant">{{ currentTime | timeFormat }}</div>
      <div class="timeControl">
        <input type="range" max="100" min="0" class="timeControlBar" :value="progress" @change="changeProgress">
      </div>
      <div class="timeTotal">{{ durationTime | timeFormat }}</div>
    </div>
  </div>
</template>

<script>
let timeCount;

export default {
  name: "HelloWorld",
  data() {
    return {
      videoId: "pQWZzoB7P1E",
      nowPlayIng: {
        songMame: "Let You Go",
        artist: "Jim Yosef",
        videoId: "pQWZzoB7P1E",
        pic: `https://linkstorage.linkfire.com/medialinks/images/7b42ba6d-aea4-42c5-9ea6-7637c38da647/artwork-440x440.jpg`,
      },
      isPlay: false,
      playList: [{
        songMame: "Let You Go",
        artist: "Jim Yosef",
        videoId: "pQWZzoB7P1E",
        pic: `https://linkstorage.linkfire.com/medialinks/images/7b42ba6d-aea4-42c5-9ea6-7637c38da647/artwork-440x440.jpg`,
      },{
        songMame: "Eternal",
        artist: "Marin Hoxha & Caravn",
        videoId: "9Jk9hQ4wUto",
        pic: `https://linkstorage.linkfire.com/medialinks/images/b5c70a68-414f-4461-8f0a-587204073f9a/artwork-440x440.jpg`,
      },{
        songMame: "GET UP",
        artist: `TOKYO MACHINE & Guy Arthur`,
        videoId: "euw0w42g27",
        pic: `https://linkstorage.linkfire.com/medialinks/images/f414f928-e610-4968-857f-a5fdb038084d/artwork-440x440.jpg`,
      }],
      platListIndex: 0,
      currentTime: 0,
      durationTime: 0,
      volume: 100,
      progress: 0,
      playerState: 0
    };
  },
  methods: {
    play() {
      let vm = this;
      timeCount = setInterval(() => { 
        vm.getPlayerCurrentTime();
      }, 1000)
    },
    async playing() {
      this.isPlay = true;
      await this.player.playVideo();
    },
    async paused() {
      this.isPlay = false;
      await this.player.pauseVideo();
      clearInterval(timeCount);
    },
    async getPlayerData() {
      console.log('getDuration')
      this.durationTime = await this.player.getDuration();
      console.log(await this.player.getDuration())
      this.volume = await this.player.getVolume();
    },
    async getPlayerCurrentTime() {
      let vm = this;
      await this.player.getCurrentTime();
      console.log(await this.player.getCurrentTime())
      this.currentTime = await this.player.getCurrentTime();
      vm.progress = vm.currentTime/vm.durationTime*100;
    },
    async getPlayerState() {
      this.playerState = await this.player.getPlayerState()
    },
    changeVolume(e) {
      this.volume = e.target.value;
      this.player.setVolume(e.target.value);
    },
    changeProgress(e) {
      let vm = this;
      vm.progress = e.target.value;
      vm.currentTime = Math.floor(vm.durationTime*vm.progress/100);
      vm.player.seekTo(vm.currentTime, true);
    },
    changeSong(index) {
      this.getPlayerState();
      let vm = this;
      vm.paused();
      vm.platListIndex += index;
      vm.platListIndex = vm.platListIndex < 0 ? vm.playList.length - 1 : vm.platListIndex > vm.playList.length - 1 ? 0 : vm.platListIndex;
      vm.nowPlayIng = vm.playList[vm.platListIndex];
      setTimeout(() => {
        vm.getPlayerData();
        vm.playing();
      }, 500);
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  mounted() {
    this.getPlayerData();
  },
  updated() {
    this.getPlayerState();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  position: relative;
  box-sizing: border-box;
  // outline: 1px solid black;
}
iframe {
  width: 0;
  height: 0;
  display: none !important;
}
.play_form {
  width: 100%;
  max-width: 800px;
  max-height: 800px;
}
.top {
  position: relative;
  .changeSong {
    position: absolute;
    top: 20px;
    right: 32px;
    .back {
      margin-bottom: 20px;
    }
  }
}
.cdPlat {
  width: 600px;
  height: 600px;
  border: 3px solid black;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0px 3px 6px #00000029;
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
  .cdPlayIngRotate {
    animation-play-state: running;
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
    border: 3px solid black;
    border-radius: 50%;
  }
}

.buttonList {
  display: flex;
}
.back,.next {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid black;
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
  content: " ";
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

.play::after {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 16px 0 16px 27px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.play::before {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 22px 0 22px 38.1px;
  border-color: transparent transparent transparent black;
  position: absolute;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.pause::before {
  content: "";
  display: block;
  width: 13px;
  height: 36px;
  border: 3px solid #000000;
  border-radius: 6px;
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
}
.pause::after {
  content: "";
  display: block;
  width: 13px;
  height: 36px;
  border: 3px solid #000000;
  border-radius: 6px;
  position: absolute;
  right: 25%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
}

.next::before {
  content: "";
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}
.next::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 26px;
  border-color: transparent transparent transparent #007bff;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
}

.controlList {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .musicStatus {
    width: 92px;
    height: 92px;
    border: 3px solid black;
    border-radius: 50%;
    box-shadow: 0px 2px 2px #333;
    cursor: pointer;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  .musicInfo {
    text-align: left;
    .artist {
      font-size: 24px;
      font-weight: bold;
    }
  }
  .musicVolume {
    appearance: none;
    height: 9px;
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border: 3px solid black;
    border-radius: 75px;
    input[type="range"]{
      -webkit-appearance: none;
      width: 200px;
      outline: none; /* 避免點選會有藍線或虛線 */
      background: none;
      z-index: 1;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      position: relative; /* 設為相對位置，為了前後區塊的絕對位置而設定 */
      width: 16px;
      height: 25px;
      background: #fff;
      z-index: 4;
      border: 2px solid black;
      transition: 0.2s; /* 點選放大時候的漸變時間 */
    }
    input[type="range"]::-webkit-slider-thumb:before,
    input[type="range"]::-webkit-slider-thumb:after { 
      position: absolute;
      top: 3px;
      width: 2000px;          /* 長度很長沒關係，因為剛剛有用 overflow:hidden 了 */
      height: 9px;
      content: "";
      display: block;
      pointer-events: none;   /* 讓滑鼠可以點擊穿透偽元素，不然會點不到下面 */
      transition:.2s;
    }   
    input[type="range"]::-webkit-slider-thumb:before {
      left: -1997px;
      background: #f22;
    }
    input[type="range"]::-webkit-slider-thumb:after {
      left: 10px;
      background: #edc;
    }
  }
}
.timeLine {
  display: flex;
  justify-content: center;
  align-items: center;
  .timeControlBar {
    appearance: none;
    width: 100%;
    height: 9px;
    // background-color: #fff;
    border: 1px solid black;
    border-radius: 75px;
  }
  input[type="range"]{
    -webkit-appearance: none;
    width: 200px;
    outline: none; /* 避免點選會有藍線或虛線 */
    background: none;
    z-index: 1;
  }
  input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    position: relative; /* 設為相對位置，為了前後區塊的絕對位置而設定 */
    width: 16px;
    height: 25px;
    // background: #fff;
    z-index: 4;
    border: 2px solid black;
    transition: 0.2s; /* 點選放大時候的漸變時間 */
  }
  input[type="range"]::-webkit-slider-thumb:before,
  input[type="range"]::-webkit-slider-thumb:after {
    position: absolute;
    top: 3px;
    width: 100px;          /* 長度很長沒關係，因為剛剛有用 overflow:hidden 了 */
    height: 20px;
    content:"";
    display: block;
    pointer-events: none;   /* 讓滑鼠可以點擊穿透偽元素，不然會點不到下面 */
    transition:  .2s;
  }

  input[type="range"]::-webkit-slider-thumb:before{
    // left: -1997px;
    background: #f22;
  }
  input[type="range"]::-webkit-slider-thumb:after {
    // left: 10px;
    background: #edc;
  }
}
</style>
