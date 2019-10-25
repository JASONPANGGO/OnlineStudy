<template>
  <div class="panel-slot-outer">
    <div v-if="type1==='课程教程'" class="video-list">
      <div class="item-outer" :gutter="20" v-for="item in videoList" :key="item.title">
        <div class="item-outer-border">
          <div class="item-name">
            <i class="el-icon-video-play"></i>
            <span>{{item.title}}</span>
          </div>
          <div class="time">{{item.time}}</div>
        </div>
      </div>
    </div>
    <div v-else-if="type1==='课程简介'" class="introduce">
      <div class="introduce-inner">{{introduce}}</div>
    </div>
    <div v-else-if="type1==='最新发布'||type1==='热度排行'" class="class-list-lastest">
      <div class="class-list-lastest-inner">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type1: {
      defaultP: "1"
    }
  },

  data() {
    return {
      introduce: "ttttttttttttttttttttttttttttttttttttttttttttttt",
      videoList: [
        {
          title: "01",
          url: "",
          time: "11"
        },
        {
          title: "02",
          url: "",
          time: "11"
        }
      ],
      rateValue: 0
    };
  }
};
</script>
<style lang="scss" scoped>
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
  .video-list {
    width: 100%;
    .item-outer {
      box-sizing: content-box;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
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