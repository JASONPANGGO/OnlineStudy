<template>
  <el-container class="about">
    <el-main class="main">
      <introBgImg :type="'createNewClass'" :height="200" />
      <div class="content">
        <div class="aside">
          <i class="el-icon-s-promotion logo"></i>
          <p>不好的东西有人分享会很开心，好的东西没人分享也挺无聊的。</p>
        </div>
        <el-form
          class="form"
          ref="form"
          :model="form"
          label-width="80px"
          label-position="top"
        >
          <el-form-item label="课程名称">
            <el-input
              class="textarea"
              v-model="form.name"
              type="text"
              placeholder="请输入课程名称"
              maxlength="20"
            ></el-input>
          </el-form-item>
          <el-form-item label="课程简介">
            <el-input
              v-model="form.introduce"
              type="textarea"
              maxlength="200"
              :autosize="{ minRows: 3, maxRows: 6 }"
              resize="none"
              placeholder="课程简介（200字以内）"
            ></el-input>
          </el-form-item>
          <el-form-item label="课程难度">
            <el-rate v-model="form.level"></el-rate>
          </el-form-item>
          <el-form-item label="课程标签">
            <editTag v-model="form.interests" />
          </el-form-item>
          <el-form-item label="课程详细介绍">
            <el-input
              v-model="form.content"
              type="textarea"
              resize="none"
              placeholder="课程详细介绍"
              :autosize="{ minRows: 3, maxRows: 8 }"
            ></el-input>
          </el-form-item>
          <el-form-item label="课程附件">
            <el-upload
              class="upload-demo"
              drag
              :data="{
                classId
              }"
              ref="uploadFile"
              :limit="1"
              :auto-upload="false"
              action="http://www.gdutrex.top:8080/class/file"
              :multiple="false"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">
                只能上传zip文件，且不超过5mb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="视频文件" class="form-video">
            <el-button :round="true" @click="uploadVideo">添加课程</el-button>
            <div class="form-video-list">
              <videoItem
                v-model="form.videoList"
                :classId="classId"
              ></videoItem>
            </div>
          </el-form-item>
          <el-form-item class="form-button">
            <el-button :round="true" @click="submit">确认</el-button>
            <el-button :round="true" @click="goBack">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import introBgImg from "../components/introBgWithIma.vue";
import videoItem from "../components/videoDraggable";
import editTag from "./editTag";
import { store } from "../store";
export default {
  components: {
    introBgImg,
    videoItem,
    editTag
  },
  mounted() {
    let id = store.userinfo.mail + new Date().getTime();
    this.classId = id;
  },
  data() {
    return {
      classId: "",
      colors: [
        {
          number: 1,
          text: "文本",
          type: "出现",
          color: "#5BC7B2"
        },
        {
          number: 1,
          text: "文本",
          type: "出现",
          color: "#007FFF"
        },
        {
          number: 2,
          text: "文本",
          type: "出现",
          color: "#F69B29"
        }
      ],
      form: {
        name: "",
        introduce: "",
        level: 0,
        interests: ["stet"],
        content: "",
        videoList: [
          {
            url: "",
            key: "videoList000",
            name: "",
            uploadId: ""
          },
          {
            url: "",
            key: "videoList001",
            name: "",
            uploadId: ""
          }
        ]
      }
    };
  },
  methods: {
    uploadVideo(res) {
      this.form.videoList.push({
        url: "",
        key: "videoList" + this.form.videoList.length + 1,
        name: ""
      });
      window.console.log(res);
    },
    submit() {
      this.$refs.uploadFile.submit();
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  .main {
    width: 100%;
    .content {
      display: flex;
      width: 100%;
      .aside {
        display: flex;
        flex-direction: column;
        width: 30%;
        align-items: center;
        box-shadow: 5px 0px 5px #0f0f0f;
        .logo {
          margin: 20px;
          font-size: 5em;
          text-shadow: 5px 5px 5px #0f0f0f;
        }
        p {
          padding: 10px 20px;
          font-size: 2em;
          font-weight: 100;
          text-shadow: 5px 5px 5px #a3a3a3;
        }
      }
    }
    background: #414141;
    margin: 0;
    padding: 0;
    .form {
      margin-left: 20px;
      width: 100%;
      .el-form-item {
        margin: 20px;
        width: 300px;
        .upload-demo {
          .el-upload__tip {
            color: white;
          }
        }
      }
      .form-video {
        width: calc(100% - 40px);
        .el-button {
          color: rgb(253, 253, 253);
          background: #333333;
          border: none;
        }
        .form-video-btn {
          font-size: 10px;
        }
      }
      .form-button {
        .el-button {
          background: #646464;
          color: aliceblue;
          height: 30px;
          line-height: 0;
          border-color: #646464;
          width: 100px;
          &:active {
            background: #333333;
          }
          &:hover {
            color: white;
            border-color: #a3a3a3;
            background: #444444;
          }
        }
      }
      .el-input {
        width: 200px;
      }
      .el-rate {
        margin-top: 10px;
        margin-left: 30px;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 1;
      color: white;
      background-image: #646464;
    }
  }

  color: white;
  width: 80%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  z-index: 0;
  background: #222222;
}
</style>
