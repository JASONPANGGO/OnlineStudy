<template>
  <div class="topbar">
    <div class="search">
      <div class="logo">
        <i class="el-icon-search"></i>
      </div>
      <input class="input" type="text" placeholder="what do you want to learn?" @click="onSearch" />

      <router-link to="/userinfo">
        <div class="info">
          <div class="info-text">
            <div class="info-name">{{ userName }}</div>
            <div class="info-account">{{ mail }}</div>
          </div>
          <div class="info-avatar">
            <img :src="avatarUrl" />
          </div>
        </div>
      </router-link>

      <el-popover placement="bottom" width="200" trigger="click">
        <el-menu>
          <el-menu-item>
            <router-link to="/publishnews" slot="title">
              <i class="el-icon-s-opportunity"></i>
              Publish News
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/createnewclass" slot="title">
              <i class="el-icon-s-promotion"></i>
              Create Class
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link :to="'/userinfo'" slot="title">
              <i class="el-icon-setting"></i>
              Account Setting
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <el-button slot="title" @click="signout" type="text">
              <i class="el-icon-d-arrow-right"></i>
              Sign Out
            </el-button>
          </el-menu-item>
        </el-menu>
        <div class="more" slot="reference">
          <i class="el-icon-more"></i>
        </div>
      </el-popover>
    </div>
    <div class="search-cover" v-if="search" @click="onSearch">
      <div class="search-title">search</div>
      <input class="search-input" type="text" ref="input" />
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "TopBar",
  data() {
    return {
      search: false
    };
  },
  methods: {
    signout() {
      localStorage.clear();
      this.$router.push("/login");
    },
    onSearch() {
      this.search = !this.search;
      this.search &&
        this.$nextTick().then(() => {
          this.$refs.input.focus();
        });
    }
  },
  computed: {
    userName: () => store.userinfo.userName,
    mail: () => store.userinfo.mail,
    avatarUrl: () => store.userinfo.avatarUrl
  }
};
</script>

<style scoped>
.topbar {
  z-index: 2;
  position: fixed;
  width: 100vw;
  height: 60px;
  background-color: rgb(34, 34, 34);
}

.search {
  width: 400px;
  height: 40px;
  background-color: #404040;
  margin-top: 10px;
  margin-left: 120px;
  display: flex;
  border-radius: 5px;
}

.logo {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.4rem;
  color: #999999;
}

.input {
  width: 200px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: 10px;
}

.search-cover {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(70, 70, 70, 0.9);
}

.search-title {
  position: absolute;
  top: 80px;
  left: 240px;
  color: white;
  font-size: 0.8rem;
}

.search-input {
  width: 700px;
  height: 100px;
  font-size: 4rem;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 100px;
  left: 240px;
}

.info {
  width: 200px;
  height: 60px;
  position: absolute;
  right: 60px;
  top: 0;
  transition: 0.3s all;
  cursor: pointer;
}
.info:hover {
  background-color: #444444;
}

.info-avatar {
  position: absolute;
  width: 60px;
  height: 60px;
  right: 0;
  text-align: center;
}
.info-avatar img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  border-radius: 50%;
}

.info-text {
  position: absolute;
  left: 0;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.info-name {
  text-align: center;
  color: white;
  font-size: 0.9rem;
}
.info-account {
  color: #999999;
  font-size: 0.7rem;
}

.more {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 60px;
  text-align: center;
  font-size: 2rem;
  color: #999999;
  transition: 0.5s all;
  cursor: pointer;
}
.more:hover {
  color: white;
  background-color: #444444;
}
</style>
