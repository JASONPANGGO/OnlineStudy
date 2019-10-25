<template>
  <el-container class="about">
    <el-main class="main">
      <introBgImg :type="'createNewClass'" :height="200" />
      <div class="content">
        <div class="aside">
          <i class="el-icon-s-promotion logo"></i>

          <p>不好的东西有人分享会很开心，好的东西没人分享也挺无聊的。</p>
        </div>
        <el-form class="form" ref="form" :model="form" label-width="80px" label-position="top">
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
              v-model="form.name"
              type="textarea"
              maxlength="200"
              :autosize="{ minRows: 3, maxRows: 6 }"
              resize="none"
              placeholder="课程简介（200字以内）"
            ></el-input>
          </el-form-item>
          <el-form-item label="课程难度">
            <el-rate v-model="form.rate"></el-rate>
          </el-form-item>
          <el-form-item label="课程详细介绍">
            <el-input
              v-model="form.name"
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
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传zip文件，且不超过5000kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <P>注：视频文件在创建课程后进行添加</P>
            <el-button round="true">确认</el-button>
            <el-button round="true">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import introBgImg from "../components/introBgWithIma.vue";
export default {
  components: {
    introBgImg
  },
  data() {
    return {
      form: {
        name: "",
        rate: ""
      }
    };
  },
  methods: {
    goBack() {
      window.console.log("go back");
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
  .main {
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
      .el-form-item {
        margin: 20px;
        width: 300px;
        .upload-demo {
          .el-upload__tip {
            color: white;
          }
        }
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