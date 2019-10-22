<template>
  <div class="panel-slot-outer">
    <div v-if="type==='videoList'" class="video-list">
      <el-row class="item-outer" :gutter="20" v-for="item in videoList" :key="item">
        <el-col :span="1">
          <i class="el-icon-video-play"></i>
        </el-col>
        <el-col :span="10" :offset="0">
          <div>{{item.title}}</div>
        </el-col>
        <el-col :span="2" :push="10">
          <div class="time">{{item.time}}</div>
        </el-col>
      </el-row>
    </div>
    <div v-else-if="type==='introduce'" class="introduce">
      <div class="introduce-inner">{{introduce}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "videoList"
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
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
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
    width: 98%;
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
      width: 100%;
      border-bottom: 1px solid #919191;
      margin-right: 20px;
      .el-col {
        box-sizing: content-box;
        margin-top: 10px;

        margin-bottom: 10px;
        i {
          padding: 0 20px;
          font-size: 24px;
        }
        .time {
          color: #7a7a7a;
        }
        font-size: 18px;
      }
    }
  }
}
</style>