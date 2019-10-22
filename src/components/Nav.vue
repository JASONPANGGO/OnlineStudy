<template>
  <div class="nav" @mouseenter="toggleMenu" @mouseleave="toggleMenu" :class="{extend:extend}">
    <div class="item">
      <div class="logo icon">
        <i :class="appLogo"></i>
      </div>
      <div class="name icon" :class="{opacity:extend}">{{appName}}</div>
    </div>
    <div class="menu">
      <router-link :to="item == 'home'? '/' : item" v-for="(item, index) in nav" :key="index" active-class="active">
        <div class="item">
          <div class="logo">
            <i :class="item.logo"></i>
          </div>
          <div class="name" :class="{opacity:extend}">{{item.name.toUpperCase()}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "../store";
export default {
  name: "Nav",
  data() {
    return {
      nav: [
        { name: "home", logo: "el-icon-s-home" },
        { name: "videos", logo: "el-icon-s-help" },
        { name: "exams", logo: "el-icon-s-marketing" },
        { name: "about", logo: "el-icon-info" }
      ],
      extend: false
    };
  },
  methods: {
    toggleMenu() {
      this.extend = !this.extend;
    }
  },
  computed: {
    appName: () => store.appName,
    appLogo: () => store.appLogo
  }
};
</script>

<style scoped>
.nav {
  z-index: 9999;
  position: fixed;
  left: 0;
  width: 60px;
  height: 100vh;
  background-color: rgb(34, 34, 34);
  transition: 0.2s all;
  box-shadow: 0px 0 40px 30px rgba(0, 0, 0, 0.4);
}
.menu {
  margin-top: 30px;
  color: #999999;
}
.item {
  position: relative;
  width: 100%;
  height: 60px;
  cursor: pointer;
  transition: 0.2s all;
}
.item:hover {
  background-color: #565656;
  color: white;
}
.extend {
  width: 200px;
}
.logo {
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 1.8rem;
}
.icon {
  color: white;
}
.name {
  position: absolute;
  font-size: 0.8rem;
  line-height: 60px;
  top: 0;
  left: 60px;
  /* transition: 0.2s; */
  opacity: 0;
}
.opacity {
  opacity: 1;
}
.active {
  color: rgb(0, 219, 110);
}
</style>