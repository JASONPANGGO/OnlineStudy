<template>
  <div class="home">
    <VideoClipBackground />
    <div class="head">
      <div class="logo">
        <i class="el-icon-s-promotion"></i>
        <span class="name">{{appName}}</span>
      </div>
      <div class="slogan">{{appSlogan}}</div>
    </div>
    <div class="videos">
      <VideoItem
        style="margin-left:50px"
        v-for="(video, index) in videos"
        :key="index"
        :title="video.title"
        :author="video.author"
        :imgSrc="video.imgSrc"
        :star="video.star"
      />

      <div class="refresh">
        <i class="el-icon-refresh"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import VideoItem from "../components/VideoItem";
import VideoClipBackground from "../components/VideoClipBackground";
// @ is an alias to /src
export default {
  name: "home",
  components: {
    VideoItem,
    VideoClipBackground
  },
  data() {
    return {
      videos: [
        {
          title: "HTML高级教程",
          author: "Mike Flog",
          imgSrc: "http://placehold.it/230x150",
          star: "9.6",
          id: "001"
        },
        {
          title: "CSS入门",
          author: "Will Tune",
          imgSrc: "http://placehold.it/230x150",
          star: "5.6",
          id: "002"
        },
        {
          title: "JavaScript进阶",
          author: "Trenise Ruive",
          imgSrc: "http://placehold.it/230x150",
          star: "8.4",
          id: "003"
        },
        {
          title: "TensorFlow从入门到精通",
          author: "Kiutruse Vlowers",
          imgSrc: "http://placehold.it/230x150",
          star: "7.7",
          id: "004"
        }
      ]
    };
  },
  computed: {
    appName: () => store.appName,
    appLogo: () => store.appLogo,
    appSlogan: () => store.appSlogan
  }
};
</script>
<style scoped>
.home {
  max-width: 100vw;
  height: 100vh;
  background-color: #404040;
  overflow: hidden;
}
video {
  position: fixed;
  margin-left: 60px;
  width: 1920px;
  user-select: none;
  /* height: 100vh; */
}
.logo {
  position: absolute;
  top: 170px;
  left: 200px;
  font-size: 3rem;
  color: white;
}
.name {
  margin-left: 1rem;
  font-size: 2.6rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.slogan {
  position: absolute;
  top: 280px;
  font-size: 2rem;
  left: 200px;
  color: white;
  width: 400px;
  font-weight: bold;
}
.videos {
  position: absolute;
  width: calc(100vw - 60px);
  margin-left: 60px;
  height: 300px;
  bottom: 0;
  background-color: aqua;
  background: linear-gradient(transparent, #111111);
  display: flex;
  align-items: center;
}
.refresh {
  margin-left: 70px;
  font-size: 3rem;
  color: white;
  transition: 0.3s all;
  cursor: pointer;
}
.refresh:hover {
  animation: spin infinite 1s reverse;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>