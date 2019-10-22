<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  components: {
    Nav
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
}
</style>

