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
        <input type="range" max="100" min="0" :value="progress" @change="changeProgress">
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
    this.getPlayerState()
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  position: relative;
  box-sizing: border-box;
  outline: 1px solid black;
}
iframe {
  width: 0;
  height: 0;
  display: none !important;
}
.play_form {
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

.play::before {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 0 15px 26px;
  border-color: transparent transparent transparent #007bff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pause::before {
  content: "";
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
}
.pause::after {
  content: "";
  display: block;
  width: 5px;
  height: 60%;
  position: absolute;
  right: 30%;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
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
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
}
.timeLine {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
