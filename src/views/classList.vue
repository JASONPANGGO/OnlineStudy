<template>
  <el-container class="about">
    <el-main class="main">
      <introBgImg :type="'classList'" :height="200" />
      <panel v-model="btnClick" :panelType="'classList'" :btnList="btnList">
        <panelSlot :type1="btnClick"></panelSlot>
      </panel>
    </el-main>
  </el-container>
</template>
<script>
import introBgImg from "../components/introBgWithIma.vue";
import panel from "../components/panel";
import panelSlot from "../components/planeSlot";
export default {
  data() {
    return {
      btnClick: {
        type: String,
        default: "111"
      },
      btnList: ["最新发布", "热度排行"]
    };
  },
  components: {
    introBgImg,
    panel,
    panelSlot
  }
};
</script>
<style lang="scss" scoped>
.about {
  background: blue;
  width: 80%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  .main {
    background: #333333;
    margin: 0;
    padding: 0;
  }
}
</style>