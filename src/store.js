import Vue from "vue";

export let store = Vue.observable({
  appName: "OnlineStudy",
  appLogo: "el-icon-s-promotion",
  appSlogan: "Build intelligent apps of the future",
  themeColor: "rgb(0, 219, 110)",
  userinfo: {
    userName: "JasonPang",
    mail: "jason_pang@126.com",
    avatarUrl: "http://placehold.it/200x200",
    following: 0,
    interests: ["JavaScript", "TypeScript", "Vue", "NodeJS"],
    gender: "men"
  }
});

export let mutations = {
  setUseinfo(userInfo) {
    let { interests, following, avatarUrl, userName, mail, gender } = userInfo;
    store.userinfo.mail = mail ? mail : store.userinfo.mail;
    store.userinfo.interests = interests ? interests : store.userinfo.interests;
    store.userinfo.followin = following;
    store.userinfo.avatarUrl = avatarUrl;
    store.userinfo.userName = userName;
    store.userinfo.gender = gender;
  }
};
