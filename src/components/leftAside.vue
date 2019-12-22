<template>
  <el-aside class="outer">
    <el-row>
      <el-col class="writer">
        <span>作者信息</span>
      </el-col>
      <el-col justify="center">
        <div class="flex-row">
          <el-avatar :size="50" :src="avatarUrl"></el-avatar>
          <div class="writer-name">{{authorName}}</div>
        </div>
      </el-col>
      <el-row>
        <el-col class="writer-introduce">自我介绍</el-col>
        <el-col class="flex-row-btween">
          <div>难度</div>
          <div>
            <el-rate v-model="level" :disabled="true"></el-rate>
          </div>
        </el-col>
        <el-col class="flex-row-btween">
          <div>评分</div>
          <div>
            <el-rate v-model="value" :disabled="true" :show-text="false"></el-rate>
          </div>
        </el-col>
        <!-- <el-col class="flex-row-btween">
          <div>时间长度</div>
          <div>2h</div>
        </el-col>-->
        <el-col class="flex-row-btween">
          <div>发布时间</div>
          <div>{{date}}</div>
        </el-col>
      </el-row>
    </el-row>
  </el-aside>
</template>
<script>
export default {
  props: {
    classAuthor: String
  },
  data() {
    return {
      circleUrl: "",
      value: 5,
      level: 5,
      authorName: "",
      date: "",
      avatarUrl: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      let classAuthor = JSON.parse(this.classAuthor);
      this.authorName = classAuthor.userName;
      this.level = classAuthor.level;
      this.date = classAuthor.date;
      this.avatarUrl = classAuthor.avatarUrl;
    });
  }
};
</script>
<style lang="scss" scoped>
.outer {
  font-weight: 100;
  width: 30%;
  padding-left: 20px;
  .writer {
    font-size: 20px;
    padding: 10px 10px;
  }
  .writer-name {
    padding-left: 20px;
  }
  .el-avatar {
    margin-left: 20px;
  }
  .writer-introduce {
    padding: 20px 20px;
    font-size: 13px;
  }
}
.flex-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  margin: 10px 0;
  align-items: center;
}
.el-aside {
  background: #222222;
}
.flex-row-btween {
  font-size: 13px;
  display: flex;
  margin: 5px 0;
  flex-direction: row;
  justify-content: space-between;
  div {
    &:nth-child(1) {
      color: #7c7c7c;
    }
    &:nth-child(2) {
      margin-right: 20px;
    }
  }
}
</style>