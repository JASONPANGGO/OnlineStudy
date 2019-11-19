<template>
  <div id="app">
    <TopBar v-if="this.$route.paht!='/login'" />
    <Nav v-if="this.$route.paht!='/login'"></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import TopBar from "./components/TopBar";
import "./css/form.css";
export default {
  components: {
    Nav,
    TopBar
  },
  created() {
    window.console.log(this.$route.path);
  }
};
</script>

<style   lang="scss">
* {
  font-family: "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Helvetica,
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  background: black;
}
body {
  margin: 0;
  background: #181818;
}
a {
  text-decoration: none;
  color: #999999;
}
html {
  font-size: 16px;
}

.scroll::-webkit-scrollbar {
  /*滚动条整体部分，其中的属性有width,height,background,border等（就和一个块级元素一样）（位置1）*/
  width: 5px;
  height: 5px;
}
.scroll::-webkit-scrollbar-button {
  /*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/
  display: none;
}
.scroll::-webkit-scrollbar-track {
  /*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/
  display: none;
}
.scroll::-webkit-scrollbar-track-piece {
  /*内层轨道，滚动条中间部分（位置4）*/
  background: #000000;
}
.scroll::-webkit-scrollbar-thumb {
  /*滚动条里面可以拖动的那部分（位置5）*/
  background: #585858;
  border-radius: 4px;
}
.scroll::-webkit-scrollbar-corner {
  /*边角（位置6）*/
  background: #585858;
}
.scroll::-webkit-scrollbar-resizer {
  /*定义右下角拖动块的样式（位置7）*/
  background: #363636;
}
.scroll {
  scrollbar-arrow-color: #585858; /**/ /*三角箭头的颜色*/
  scrollbar-face-color: #333; /**/ /*立体滚动条的颜色*/
  scrollbar-3dlight-color: #666; /**/ /*立体滚动条亮边的颜色*/
  scrollbar-highlight-color: #666; /**/ /*滚动条空白部分的颜色*/
  scrollbar-shadow-color: #999; /**/ /*立体滚动条阴影的颜色*/
  scrollbar-darkshadow-color: #666; /**/ /*立体滚动条强阴影的颜色*/
  scrollbar-track-color: #666; /**/ /*立体滚动条背景颜色*/
  scrollbar-base-color: #f8f8f8; /**/ /*滚动条的基本颜色*/
}
router-view {
  margin-top: 60px;
}
</style>

