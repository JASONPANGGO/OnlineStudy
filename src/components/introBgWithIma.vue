<template>
  <div
    class="outer"
    :style="{'backgroundImage':`url(${image})`,'backgroundSize':'100% 100%',  'height': height+'px'}"
  >
    <div class="inner" v-if="type==='videoList'">
      <div class="font-contain">
        <div class="title">课程标题</div>
        <div class="writer">作者</div>
        <div class="introuce">课程简介</div>
      </div>
      <el-row class="btn">
        <el-button
          type="primary"
          plain
          native-type="button"
          style="background:#F05A28;"
          icon="el-icon-video-play"
        >主要按钮</el-button>
        <el-button type="text" plain native-type="button" icon="el-icon-upload2">附件下载</el-button>
        <el-button type="text" plain native-type="button" icon="el-icon-star-off">收藏</el-button>
      </el-row>
    </div>
    <div class="inner" v-else-if="type==='classList'">
      <div class="font-contain classList">
        <div class="class-type">课程类型</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default:
        "https://tse4.mm.bing.net/th?id=OIP.r4zOsUHTwxB5xLYo9Rf5DQHaE7&pid=Api&rs=1"
    },
    type: {
      default: "videoList",
      type: String
    },
    height: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    window.console.log(this.image);
  }
};
</script>
<style scoped  lang="scss">
.outer {
  font-weight: 100;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  .inner {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(rgba(12, 12, 12, 0.479)),
      to(rgb(10, 10, 10))
    );
    .classList {
      display: flex;
      justify-content: center;
      align-content: center;
      border-bottom: 10px solid rgb(255, 29, 206);
    }
  }
  .font-contain {
    height: 100%;

    .title {
      font-size: 32px;
      padding: 20px 10px 10px 30px;
    }
    .writer,
    .introuce {
      margin: 20px 28px;
      font-size: 13px;
    }
    .class-type {
      font-size: 36px;
      width: 95%;
      padding-top: 10px;
      box-sizing: border-box;
      height: 100%;
    }
  }
  .btn {
    margin-bottom: 20px;
    margin-left: 20px;
    .el-button {
      font-weight: 100;
      outline: none;
      border: 0;
      color: white;
      &:active,
      &:focus,
      &:hover {
        background: none;
      }
    }
  }
}
</style>