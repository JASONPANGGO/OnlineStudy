
<template>
  <el-container class="about">
    <el-main class="main">
      <introBgImg :type="'videoList'" :data="classMes" />
      <panel v-model="btnClick" :panelType="'videoList'" :btnList="btnList">
        <panelSlot :type1="btnClick" :videoList1="videoList"></panelSlot>
      </panel>
    </el-main>
    <leftAside class="aside" :classAuthor="classAuthor"></leftAside>
  </el-container>
</template>
<script>
import introBgImg from "./introBgWithIma";
import panel from "./panel";
import leftAside from "./leftAside";
import panelSlot from "./planeSlot";
export default {
  props: ["brower"],
  data() {
    return {
      btnClick: "",
      btnList: ["课程教程", "课程评价"],
      classMes: {},
      videoList: [],
      classAuthor: ""
    };
  },
  components: {
    introBgImg,
    panel,
    leftAside,
    panelSlot
  },
  mounted() {
    if (typeof this.brower === "undefined") {
      this.$router.push("/videosBrower");
      return;
    }
    let classInfo = {
      userName: this.brower.userName,
      userId: this.brower.userId,
      title: this.brower.form.name,
      introduce: this.brower.form.introduce
    };

    let classAuthor = {
      level: this.brower.form.level,
      userName: this.brower.userName,
      avatarUrl: this.brower.avatarUrl,
      gate: 1,
      date: this.brower.date
    };

    this.videoList = this.brower.form.videoList;

    this.classAuthor = JSON.stringify(classAuthor);

    this.classMes.classInfo = classInfo;
  }
};
</script>
<style scoped>
.about {
  background: blue;
  width: 80%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  z-index: 0;
}
.main {
  background: #333333;
  margin: 0;
  padding: 0;
}
.aside {
  background: #222222;
  color: white;
}
</style>
