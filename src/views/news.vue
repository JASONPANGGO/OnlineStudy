<template>
  <div class="news-outer">
    <div class="carousel-title">今日推荐</div>
    <el-carousel :interval="4000" type="card" height="200px" indicator-position="none">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="carousel-title">最新文章</div>

    <router-link
      v-for="item in dailyNews"
      :key="item.newsId"
      :to="{ name: 'newsdetail', params: { id: item.newsId,userId:item.userId}}"
    >
      <el-card>
        <div slot="header">
          <span class="news-title">{{item.title}}</span>
        </div>
        <div class="news-content-layer_left-aside">
          <div>{{item.userName}}</div>
          <el-tag class="tag" type="info">{{ item.type }}</el-tag>
        </div>
        <!-- <div class="news-content-layer">
          <div class="news-content-layer_content"></div>
          <div class="news-content-layer_left-aside">
            <div>{{item.userName}}</div>
            <span>{{item.type}}</span>
          </div>
        </div>-->
      </el-card>
    </router-link>

    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" :background="true"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  async mounted() {
    // 获取news
    this.dailyNews = await this.$fetchGet("/newsList").then(res => res);
    window.console.log(this.dailyNews);
  },
  data() {
    return {
      dailyNews: []
    };
  }
};
</script>

<style lang="scss" scoped>
.news-outer {
  position: absolute;
  padding: 0 10px;
  top: 60px;
  left: 0;
  right: 0;
  width: 85%;
  color: white;
  margin: auto;
  .el-carousel {
    margin-bottom: 10px;
  }
  .el-card {
    &:nth-child(2n) {
      background: hsla(35, 18, 72, 1);
    }
    &:nth-child(2n + 1) {
      background: hsla(278, 7, 64, 1);
    }
    &:nth-child(3n) {
      background: rgb(165, 152, 152);
    }
    &:hover {
      transition: opacity 2s, box-shadow 1s;
      opacity: 1;
      box-shadow: 5px 5px 10px #000000;
    }

    transition: opacity 1s, box-shadow 1s;
    background: rgba(129, 129, 129, 0.356);
    color: rgb(2, 2, 2);
    margin: 8px 0;
    border: transparent;
    opacity: 0.5;
  }
  .news-title {
    font-size: 2em;
    font-weight: 800;
  }
  .tag {
    margin-left: 10px;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    height: 80%;
    font-size: 1em;
  }
  .news-content-layer_left-aside {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5em;
    font-weight: 300;
    align-items: center;
  }
}
.carousel-title {
  margin-top: 20px;
  padding: 10px 0;
  font-size: 1.5em;
  // border-bottom: 1px solid rgb(209, 209, 209);
  width: 5em;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
