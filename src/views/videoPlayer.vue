<template>
  <div class="video-player">
    <video id="myVideo" class="vjs-matrix video-js">
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
    </video>
    <div class="video-player-aside">
      <div class="video-aside-btn">
        <el-button
          v-for="(item ,index) in btnList"
          :key="item"
          @click="btnClick(index)"
          type="text"
          :style="{'border-bottom-color':btnSelect===index?'#f76716':'transparent'}"
        >{{item}}</el-button>
      </div>
      <div class="video-player-list scroll" v-show="btnSelect===0">
        <div class="video-list-item" v-for="(item,index) in videoList" :key="item">
          <div class="name-item">
            <svg
              class="circle"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              height="50"
              width="40"
            >
              <rect
                x="19"
                y="0"
                class="rect"
                :style="{'height':index===videoList.length-1?'25':'50'}"
              />
              <circle cx="20" cy="25" r="6" stroke-width="2" fill="#555555" />
            </svg>

            <span class="name">课程名字</span>
          </div>
          <div class="time">22h</div>
        </div>
      </div>
      <div class="danmu-list scroll" v-show="btnSelect===1">
        <div class="danmu-list-item" v-for="(item) in videoList" :key="item">
          <div class="content" :title="item">{{item}}</div>
          <div class="time">time</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import videojs from "video.js";
export default {
  mounted() {
    this.player = videojs(
      "myVideo",
      {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted"
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      },
      function onPlayerReady() {
        window.console.log("onPlayerReady", this);
      }
    );
  },
  data() {
    return {
      btnSelect: 0,
      btnList: ["课程", "弹幕"],
      videoList: [0, 1, 23, 4, 5]
    };
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    btnClick(index) {
      this.btnSelect = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.video-player {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.video-js {
  flex: 1;
  height: 100%;
  color: white;
}
.vjs-matrix {
  .vjs-volume-level,
  .vjs-play-progress,
  .vjs-slider-bar {
    background: #00ff00;
  }
}

.video-player-aside {
  width: 300px;
  height: 100%;
  background: #222222;
  display: flex;
  flex-direction: column;
  .video-aside-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #363636;
    height: 50px;
    width: 100%;
    .el-button {
      color: aliceblue;
      width: 40px;
      border-bottom: 3px solid;
    }
  }
  .danmu-list {
    flex: 1;
    overflow: scroll;

    color: #9b9b9b;
    .danmu-list-item {
      display: flex;
      margin: 5px;
      flex-direction: columns;
      .content {
        flex: 1;
        overflow: hidden;
        margin-right: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
        &::-webkit-scrollbar {
          /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
          display: none; /* 隐藏滚动条 */
        }
      }
      .time {
        width: 30px;
      }
    }
  }

  .video-player-list {
    flex: 1;
    overflow: scroll;
    .video-list-item {
      color: #9b9b9b;
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      font-weight: 300;
      margin: 0;
      padding: 0;
      .name-item {
        display: flex;
        height: 50px;
        align-items: center;
        margin: 0;
        padding: 0;
        .circle {
          height: 100%;
          .rect {
            stroke-width: 1;
            width: 2px;
            fill: #555555;
          }
        }
        .name {
          margin-left: 0;
        }
      }

      .time {
        justify-self: end;
      }
    }
  }
}
</style>