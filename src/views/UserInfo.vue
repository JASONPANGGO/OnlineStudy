<template>
  <div>
    <VideoClipBackground :cover="0.5" />
    <div class="container">
      <div class="userinfo">
        <img class="avatar" :src="avatarUrl" alt />
        <div class="info">
          <span class="name">{{name}}</span>
          <span class="account">{{account}}</span>
          <div class="edit" @click="edit">Edit Profile</div>
          <div class="following">
            <b>{{ following }}</b> following
          </div>
          <div class="interests">
            <div class="title">INTERESTS YOU FOLLOW</div>
            <div class="tags">
              <el-tag
                class="tag"
                type="info"
                v-for="(interest, index) in interests"
                :key="index"
                >{{ interest }}</el-tag
              >
            </div>
          </div>
        </div>
      </div>
      <div class="maininfo">
        <div class="studying">
          <div class="title">Currently Learning</div>
          <div class="videos">
            <VideoItem
              style="margin-top:20px;margin-left:20px;"
              v-for="(video, index) in videos"
              :key="index"
              :title="video.title"
              :author="video.author"
              :imgSrc="video.imgSrc"
              :star="video.star"
            />
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="编辑个人信息" :visible.sync="dialogVisible">
      <el-form :model="form">
        <el-form-item style="display:flex;justify-content:center">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="handleAvatarPreview"
          >
            <img class="avatar" :src="form.avatarUrl" alt />
            <div class="img-upload-cover">
              <i class="el-icon-upload2"></i>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="昵称" label-width="160px">
          <el-col :span="18">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" label-width="160px">
          <el-radio-group v-model="form.gender">
            <el-radio :label="'male'">
              <i class="el-icon-male"></i>
            </el-radio>
            <el-radio :label="'female'">
              <i class="el-icon-female"></i>
            </el-radio>
            <el-radio :label="'secret'">
              <i class="el-icon-lock"></i>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="兴趣" label-width="160px">
          <el-tag
            :key="tag"
            v-for="tag in form.interests"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </el-form-item>
      </el-form>
      <div style="width:100%;display:flex;justify-content:flex-end">
        <el-button type="primary" size="small" @click="handleEdit(true)">确定</el-button>
        <el-button size="small" @click="handleEdit(false)">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { store } from "../store.js";
import VideoItem from "../components/VideoItem.vue";
import VideoClipBackground from "../components/VideoClipBackground";

export default {
  name: "UserInfo",
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
      ],
      dialogVisible: false,
      form: {
        name: "",
        gender: "",
        interests: [],
        avatarUrl: ""
      },
      inputVisible: false,
      inputValue: ""
    };
  },
  computed: {
    name: () => store.userinfo.name,
    account: () => store.userinfo.account,
    avatarUrl: () => store.userinfo.avatarUrl,
    following: () => store.userinfo.following,
    interests: () => store.userinfo.interests,
    gender: () => store.userinfo.gender
  },
  methods: {
    edit() {
      console.log(111);
      this.dialogVisible = true;
      Object.keys(this.form).forEach(key => {
        this.form[key] = this[key];
      });
    },
    handleClose(tag) {
      this.form.interests.splice(this.form.interests.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.interests.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleEdit(confirm) {
      if (confirm) {
      } else {
      }
      this.dialogVisible = false;
    },
    handleAvatarPreview(file) {
      console.log(file);
    }
  }
};
</script>

<style scoped lang="scss">
$themeColor: rgb(0, 219, 110);

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.container {
  max-width: 100vw;
  height: 100vh;
  background-color: #404040;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}

.img-upload-cover {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 0;
  font-size: 4em;
  line-height: 3.5em;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  opacity: 0;
  transition: 0.3s all;
}

.img-upload-cover:hover {
  opacity: 1;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
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
    .edit:hover {
      cursor: pointer;
      text-decoration: underline;
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
    .videos {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
}
</style>
