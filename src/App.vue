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

<style>
body{
    margin: 0;
}
a{
    text-decoration: none;
}
</style>
