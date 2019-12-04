import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";

import { fetchPost, fetchGet } from "./lib/fetch";
import "element-ui/lib/theme-chalk/index.css";

import "../node_modules/video.js/dist/video-js.min.css";

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.prototype.$fetchPost = fetchPost;
Vue.prototype.$fetchGet = fetchGet;

new Vue({
  router,

  render: h => h(App),
  beforeDestroyed: () => {
    localStorage.clear();
    window.console.log("1");
  }
}).$mount("#app");
  