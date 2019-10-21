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
<style scoped  lang="scss">
* {
  font-family: "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Helvetica,
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

body {
  margin: 0;
}
a {
  text-decoration: none;
}
</style>

