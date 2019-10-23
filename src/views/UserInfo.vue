<template>
<div>
      <VideoClipBackground cover='0.5'/>
  <div class="container">
    <div class="userinfo">
      <img :src="avatarUrl" alt />
      <div class="info">
        <span class="name">{{name}}</span>
        <span class="account">{{account}}</span>
        <div class="edit">Edit Profile</div>
        <div class="following">
          <b>{{following}}</b> following
        </div>
        <div class="interests">
          <div class="title">INTERESTS YOU FOLLOW</div>
          <div class="tags">
            <el-tag
              class="tag"
              type="info"
              v-for="(interest, index) in interests"
              :key="index"
            >{{interest}}</el-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="maininfo">
      <div class="studying">
        <div class="title">Currently Learning</div>
        <div class="videos">
          <VideoItem style="margin-top:20px;margin-left:20px;" v-for="(video, index) in videos" :key="index" :title="video.title"  :author="video.author" :imgSrc="video.imgSrc" :star="video.star" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import VideoItem from "../components/VideoItem.vue";
import VideoClipBackground from "../components/VideoClipBackground";

export default {
  name: "UserInfo",
  components: {
    VideoItem,VideoClipBackground
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
    name: () => store.userinfo.name,
    account: () => store.userinfo.account,
    avatarUrl: () => store.userinfo.avatarUrl,
    following: () => store.userinfo.following,
    interests: () => store.userinfo.interests
  }
};
</script>

<style scoped lang="scss">
$themeColor: rgb(0, 219, 110);

.container {
  max-width: 100vw;
  height: 100vh;
  background-color: #404040;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.userinfo {
  z-index: 222;
  margin: 10px;
  margin-left: 70px;
  margin-top: 70px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .info {
    margin-top: 50px;
    width: 70%;
    .name {
      font-size: 1.5rem;
      color: white;
      font-weight: bold;
    }
    .account {
      font-size: 0.9rem;
      color: #cfcfcf;
      margin-left: 10px;
    }
    .edit {
      margin-top: 10px;
      font-size: 0.8rem;
      color: $themeColor;
    }
    .following {
      color: #cfcfcf;
      margin-top: 10px;
    }
    .interests {
      margin-top: 50px;
      width: 100%;
      .title {
        width: 100%;
        padding-bottom: 5px;
        border-bottom: 1px solid #cfcfcf;
        color: #cfcfcf;
        font-size: 0.8rem;
        letter-spacing: 3px;
      }
      .tag {
        margin-top: 10px;
        margin-left: 10px;
      }
    }
  }
}

.maininfo {
    z-index: 222;
  margin: 10px;
  margin-top: 70px;
  margin-right: 30px;

  flex: 2;
  .studying {
    margin-top: 30px;
    .title {
      font-size: 1.5rem;
      color: white;
      font-weight: bold;
    }
    .videos{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
  }
}
</style>