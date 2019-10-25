
<template>
  <el-container class="about">
    <el-main class="main">
      <introBgImg :type="'videoList'" />
      <panel v-model="btnClick" :panelType="'videoList'" :btnList="btnList">
        <panelSlot :type1="btnClick"></panelSlot>
      </panel>
    </el-main>
    <leftAside class="aside"></leftAside>
  </el-container>
</template>
<script>
import introBgImg from "../components/introBgWithIma";
import panel from "../components/panel";
import leftAside from "../components/leftAside";
import panelSlot from "../components/planeSlot";
export default {
  data() {
    return {
      btnClick: "111",
      btnList: ["课程教程", "课程简介", "课程评价"]
    };
  },
  components: {
    introBgImg,
    panel,
    leftAside,
    panelSlot
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
