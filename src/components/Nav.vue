<template>
  <div class="nav" @mouseenter="toggleMenu" @mouseleave="toggleMenu" :class="{extend:extend}">
    <div class="item">logo</div>
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

export default {
  name: "Nav",

  data() {
    return {
      nav: ["home", "videos", "exams", "about"],
      extend: false
    };
  },
  methods: {
    toggleMenu() {
      this.extend = !this.extend;
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  width: 60px;
  height: 100vh;
  background-color: rgb(34, 34, 34);
  transition: 0.2s all;
  box-shadow: 0px 0 40px 30px #292929;
}

.menu {
  margin-top: 30px;
}

.item {
  width: 100%;
  height: 60px;
  color: #999999;
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
</style>