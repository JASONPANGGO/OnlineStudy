<template>
  <div id="app">
    <TopBar></TopBar>
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import TopBar from "./components/TopBar";
export default {
  components: {
    Nav,TopBar
  }
};
</script>

<style>
body{
    margin: 0;
}
a{
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
