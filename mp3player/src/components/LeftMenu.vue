<template>
  <div class="leftMenu"  :style="isShowList?'':`transform: translateX(-700px)translateY(-160px)rotate(36deg);`">
    <div class="outsideMenu">
      <div class="search">
        <input type="text" maxlength="5">
      </div>
      <div class="insideContent">
        <div class="songList">
          <div class="title">播放列表</div>
          <div class="content"></div>
        </div>
        <div class="artistList">
          <div class="title">歌手</div>
        </div>
        <div class="favorite">
          <div class="title">我的最愛</div>
        </div>
      </div>
    </div>
    <div class="listContent">
      <div class="listNav">
        <div class="title">工作歌單</div>
        <div class="listIcon" @click="isShowList = !isShowList">
          <div class="iconTitle">LIST</div>
          <span class="material-icons">reorder</span>
        </div>
      </div>
      <div class="songContent">
        <div class="songInfo" v-for="(item, idx) in playList" :key="idx">
          <div class="leftInfo">
            <div class="song">{{ item.songName }}</div>
            <div class="artist">{{ item.artist }}</div>
          </div>
          <div class="rightInfo">
            <div class="albumn">{{ item.albumn }}</div>
            <div class="sontTime">{{ item.songTime | timeFormat }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowList: false,
      playList: [{
        songName: "Let You Go",
        artist: "Jim Yosef",
        videoId: "pQWZzoB7P1E",
        pic: `https://linkstorage.linkfire.com/medialinks/images/7b42ba6d-aea4-42c5-9ea6-7637c38da647/artwork-440x440.jpg`,
        songTime: "",
        albumn: "NCS",
    },{
      songName: "Eternal",
      artist: "Marin Hoxha & Caravn",
      videoId: "9Jk9hQ4wUto",
      pic: `https://linkstorage.linkfire.com/medialinks/images/b5c70a68-414f-4461-8f0a-587204073f9a/artwork-440x440.jpg`,
      songTime: "",
      albumn: "NCS",
    },{
      songName: "GET UP",
      artist: `TOKYO MACHINE & Guy Arthur`,
      videoId: "euw0w42g27",
      pic: `https://linkstorage.linkfire.com/medialinks/images/f414f928-e610-4968-857f-a5fdb038084d/artwork-440x440.jpg`,
      songTime: "221",
      albumn: "NCS",
    }],
    }
  },
}
</script>
<style lang="scss" scoped>
* {
  // outline: 1px solid black;
}
.leftMenu {
  height: 96%;
  border: 3px solid black;
  background: #fff;
  display: flex;
  transition: 0.2s;
}
.outsideMenu {
  padding: 32px 0 0 8px;
}
.insideContent {
  .title {
    font-size: 14px;
  }
  .songList {
    .title {
      font-size: 10px;
      border-bottom: 1px solid black;
    }
  }
}
.listContent {
  width: 400px;
  height: 98%;
  padding: 20px 4px;
  background-color: #fff;
  border: 3px solid black;
  transform: translate(19% , 1%);
  .listNav {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 30px;
      font-weight: bold;
    }
    .listIcon {
      cursor: pointer;
      .icontitle {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
.songInfo {
  display: flex;
  justify-content: space-between;
  padding: 20px 8px;
  border-bottom: 1px solid black;
  .leftInfo {
    .song {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
.songInfo:first-child {
  border-top: 1px solid black;
}
</style>