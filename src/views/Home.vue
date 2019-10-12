<template>
  <div class="home">
    <video src="../assets/Video_1.mp4" autoplay loop muted></video>
    <div class="head">
      <div class="logo">
        <i class="el-icon-s-promotion"></i>
        <span class="name">{{appName}}</span>
      </div>
      <div class="slogan">{{appSlogan}}</div>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "../store";

// @ is an alias to /src
export default {
  name: "home",
  components: {},
  data() {
    return {

    };
  },
  computed: {
    appName: () => store.appName,
    appLogo: () => store.appLogo,
    appSlogan: ()=> store.appSlogan
  }
};
</script>
<style scoped>
.home {
  max-width: 100vw;
  height: 100vh;
  background-color: #404040;
  overflow: hidden;
}

video {
  position: fixed;
  margin-left: 60px;
  height: 100vh;
  width: 100vw;
}

.logo {
  position: absolute;
  top: 170px;
  left: 200px;
  font-size: 3rem;
  color: white;
}

.name {
  margin-left: 1rem;
  font-size: 2.6rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.slogan {
  position: absolute;
  top: 280px;
  font-size: 2rem;
  left: 200px;
  color: white;
  width: 400px;
  font-weight: bold;
}
</style>