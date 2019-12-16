<template>
  <div class="container">
    <el-header class="head">
      <h2>发布新闻</h2>
    </el-header>
    <el-main class="main">
      <mavon-editor style="width:80%;height:700px;z-index:0" @change="getHTML"></mavon-editor>
      <div class="news-config">
        <el-form :label-position="'top'" ref="form" :rules="rules" :model="news">
          <el-form-item label="标题" prop="title">
            <input v-model="news.title" placeholder="请输入标题..." type="text" class="input" />
          </el-form-item>
          <el-form-item label="分类" prop="type">
            <div class="config-item">
              <el-tag
                class="tag"
                v-for="(type, index) in types"
                :key="index"
                type="info"
                :effect="news.type === type ? 'plain' : 'dark'"
                @click="onSelect('type', type)"
              >{{ type }}</el-tag>
            </div>
          </el-form-item>
          <el-form-item label="标签">
            <div class="config-item">
              <el-tag
                :key="tag"
                v-for="(tag, index) in news.tags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
                class="tag"
                :type="tagsColor[index % tagsColor.length]"
              >{{ tag }}</el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="tagInput"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              ></el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </div>
          </el-form-item>
        </el-form>
        <div class="operate">
          <el-button type="info" @click="submit">确认并发布</el-button>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "PublishNews",
  data() {
    var inputRuler = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("输入不能为空"));
      } else {
        return callback();
      }
    };
    return {
      types: [
        "后端",
        "前端",
        "iOS",
        "Android",
        "算法",
        "运维",
        "人工智能",
        "测试",
        "设计",
        "生活"
      ],
      tagsColor: ["info", "success", "primary", "warning", "danger"],
      inputVisible: false,
      rules: {
        title: [{ validator: inputRuler, trigger: "blur", required: true }],
        type: [{ validator: inputRuler, trigger: "blur", required: true }]
      },
      tagInput: "",
      newsId: "",
      news: {
        title: "",
        type: "",
        tags: [],
        content: "",
        date: "",
        userName: ""
      }
    };
  },
  mounted() {
    let id = store.userinfo.mail + new Date().getTime();
    this.newsId = id;
  },
  methods: {
    onSelect(key, value) {
      this.news[key] = value;
    },
    handleClose(tag) {
      this.news.tags.splice(this.news.tags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let tagInput = this.tagInput;
      if (tagInput && !this.news.tags.includes(tagInput)) {
        this.news.tags.push(tagInput);
        this.inputVisible = false;
        this.tagInput = "";
      }
    },
    getHTML(raw, render) {
      this.news.content = render;
    },
    submit() {
      this.$refs["form"].validate(vaild => {
        if (vaild) {
          this.news.date = new Date().toString();
          this.news.userName = store.userinfo.userName;
          this.$fetchPost("/news", {
            newsId: this.newsId,
            token: localStorage.getItem("loginKey"),
            form: this.news
          });
          this.$router.push("/");
        } else {
          this.$notify({
            title: "请将信息输入完全",
            message: ("i", { style: "color: teal" }, "检查是否存在空的输入框")
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 70px;
  padding-right: 10px;
  padding-bottom: 0;
  color: white;
  .head {
    padding-left: 50px;
  }
  .input {
    padding-left: 10px;
    width: 100%;
    background-color: #222222;
    color: white;
    height: 40px;
    line-height: 40px;
    outline: none;
    border: none;
    border-radius: 3px;
    font-size: 18px;
  }
  .main {
    display: flex;
  }
  .news-config {
    width: 20%;
    padding: 20px;
    height: 660px;
    position: relative;
    .config-item {
      width: 100%;
      .tag {
        margin-left: 10px;
        cursor: pointer;
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
    }
    .operate {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>
