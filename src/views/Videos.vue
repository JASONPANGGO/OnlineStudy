
<template>
  <el-container class="about">
    <el-main class="main">
      <introBgImg />
      <panel>
        <panelSlot></panelSlot>
        <panelSlot :type="'introduce'"></panelSlot>
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
