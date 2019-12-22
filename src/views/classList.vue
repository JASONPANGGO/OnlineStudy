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
  props: ["id"],
  data() {
    return {
      btnClick: "最新发布",
      btnList: ["最新发布"]
    };
  },
  components: {
    introBgImg,
    panel,
    panelSlot
  },
  async mounted() {
    // 请求数据
    // await this.$fetchGet("/classList/content", {
    //   _id: this.id
    // }).then(res => {
    //   this.browseList.forEach((item, index) => {
    //     item.btnList = res[index].date;
    //   });
    // });
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