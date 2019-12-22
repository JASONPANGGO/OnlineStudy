<template>
  <div class="panel-slot-outer">
    <div v-if="type1==='课程教程'">
      <router-link
        :to="{name:'videoplay',params:{videoMessage:index,videoList:videoList}}"
        class="video-list"
        v-for="(item,index) in videoList"
        :key="item.uploadId"
      >
        <div class="item-outer" :gutter="20">
          <div class="item-outer-border">
            <div class="item-name">
              <i class="el-icon-video-play"></i>
              <span>{{item.name}}</span>
            </div>
            <!-- <div class="time">{{item.time}}</div> -->
          </div>
        </div>
      </router-link>
    </div>
    <div v-else-if="type1==='课程评价'">
      <el-card class="card-class_comment">
        <div class="card-class_comment_item">
          <div class="card-class_comment_item_left">
            <div style="display:flex;align-items:center;justify-content:flex-start;">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
              <span style="margin-left:10px;">name</span>
            </div>
            <el-rate></el-rate>
          </div>
          <div class="item_content">
            1111111111111111111111111111111111111
            <br />_______
            <span style="font-size:16px;">发布日期 time</span>
          </div>
        </div>
        <div class="card-class_comment_item">
          <div class="card-class_comment_item_left">
            <div style="display:flex;align-items:center;justify-content:flex-start;">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
              <span style="margin-left:10px;">name</span>
            </div>
            <el-rate></el-rate>
          </div>
          <div class="item_content">
            1111111111111111111111111111111111111
            <br />_______
            <span style="font-size:16px;">发布日期 time</span>
          </div>
        </div>
      </el-card>

      <el-form
        :model="form"
        ref="form"
        class="comment-form"
        label-position="top"
        status-icon
        :rules="rules"
      >
        <el-form-item label="评论内容" prop="content">
          <el-input
            v-model="form.content"
            :autosize="true"
            :resize="'none'"
            :maxlength="100"
            :rows="2"
            label-width="80px"
            type="textarea"
          ></el-input>
        </el-form-item>
        <el-form-item label="评分">
          <el-rate v-model="form.rate" prop="rate"></el-rate>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitCom">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div v-else-if="type1==='课程简介'" class="introduce">
      <div class="introduce-inner">{{introduce}}</div>
    </div>-->
    <div v-else-if="type1==='最新发布'" class="class-list-lastest">
      <router-link :to="'videos'" class="class-list-lastest-inner">
        <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"></el-image>
        <div class="class-message">
          <div class="class-name">课程名字</div>
          <div class="class-other-mes">
            <p>分类</p>
            <p>发布日期</p>
            <p>总时长</p>
            <p>
              <el-rate
                v-model="rateValue"
                disabled
                show-score
                text-color="#ff9900"
                score-template="3.7"
              ></el-rate>
            </p>
          </div>
        </div>
        <div class="class-btn"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type1: {
      type: String,
      default: "1"
    },
    videoList1: {
      type: Array
    }
  },
  data() {
    var inputRuler = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("输入不能为空"));
      } else {
        return callback();
      }
    };
    return {
      // introduce: "ttttttttttttttttttttttttttttttttttttttttttttttt",
      videoList: [],
      rateValue: 0,
      rules: {
        rate: [{ validator: inputRuler, required: true }],
        content: [{ validator: inputRuler, required: true }]
      },
      form: {
        rate: 5,
        content: "",
        date: new Date().toLocaleString()
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.videoList = this.videoList1;
    });
  },
  methods: {
    submitCom() {
      this.$refs["form"].validate(data => {
        if (data) {
          this.$notify({
            title: "请将信息输入完全",
            message: ("i", { style: "color: teal" }, "检查是否存在空的输入框")
          });
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
.card-class_comment {
  font-size: 15px;
  color: white;
  background: none;
  border-color: #424242;
  width: 100%;
  display: "flex";
  margin: 0;
  box-shadow: 10px 0 10px black;
  flex-direction: column;
  margin-bottom: 20px;
  .card-class_comment_item {
    margin: 30px 0;
    display: flex;
    border-top: 1px solid rgb(68, 68, 68);
    border-left: 3px solid rgb(68, 68, 68);
    padding-top: 20px;
    padding-left: 20px;
    width: 100%;

    justify-content: center;
    align-items: center;
    .card-class_comment_item_left {
      width: 150px;
      height: 100%;
    }
  }
  .item_content {
    font-size: 1.3em;
    word-wrap: break-word;
    word-break: break-all;

    height: 100%;
    flex: 1;
  }
}
.comment-form {
  background: white;
  padding-bottom: 20px;
  padding-left: 50px;

  box-shadow: -10px 0 10px rgb(240, 240, 240);
  .el-input {
    width: 80%;
  }
}
.class-list-lastest {
  width: 100%;
  .class-list-lastest-inner {
    width: 100%;
    padding-bottom: 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(83, 83, 83);

    .el-image {
      box-sizing: border-box;
      padding: 10px 10px 10px 10px;
      width: 130px;
      height: 90px;
    }
    .class-btn {
      width: 130px;
    }
    .class-message {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .class-name {
        color: white;
      }
      .class-other-mes {
        display: flex;
        flex-direction: row;
        width: 100%;
        font-size: 13px;
        p {
          margin: 0 2px;
        }
      }
    }
  }
}
// 课程介绍
.introduce {
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .introduce-inner {
    width: 95%;
    margin: 20px 10px;
  }
}
// videolist css
.panel-slot-outer {
  color: rgb(182, 182, 182);
  width: 100%;
  font-size: 24px;
  height: auto !important;
  height: 400px;
  min-height: 400px;

  .video-list {
    width: 100%;
    .item-outer {
      box-sizing: content-box;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      .item-outer-border {
        width: 97%;
        border-bottom: 1px solid #919191;
        align-items: center;
        height: 20px;
        display: flex;
        flex-direction: row;
        margin: 10px 0;
        padding: 10px 0;

        .item-name {
          i {
            box-sizing: content-box;
            font-size: 24px;
            padding: 0 10px;
          }
          flex: 18;
          display: flex;
          align-items: center;
        }
        .time {
          flex: 2;

          color: #7a7a7a;
          box-sizing: content-box;
        }
        font-size: 15px;
      }
    }
  }
}
</style>