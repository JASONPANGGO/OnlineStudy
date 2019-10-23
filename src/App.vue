<template>
  <div id="app">
    <TopBar />
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import TopBar from "./components/TopBar"

export default {
  components: {
    Nav,TopBar
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
}
a {
  text-decoration: none;
      color: #999999;
}
html{
  font-size: 16px;
}
router-view{
  margin-top: 60px;
}
</style>

