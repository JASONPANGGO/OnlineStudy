import Vue from "vue";

export let store = Vue.observable({
  appName: "OnlineStudy",
  appLogo: "el-icon-s-promotion",
  appSlogan: "Build intelligent apps of the future",
  themeColor: "rgb(0, 219, 110)",
  userinfo: {
    name: "JasonPang",
    account: "jason_pang@126.com",
    avatarUrl: "http://www.gdutrex.top:8080/userimage/men.jpg",
    following: 0,
    interests: ["JavaScript", "TypeScript", "Vue", "NodeJS"]
  }
});

export let mutations = {
  setUseinfo(userInfo) {
    store.userinfo.name = userInfo.userName;
    store.userinfo.account = userInfo.mail;
    let { interests, following } = userInfo;
    store.userinfo.interests = interests;
    store.userinfo.followin = following;
  }
};
