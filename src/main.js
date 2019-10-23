import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Video from "video.js";
import "../node_modules/video.js/dist/video-js.min.css";

Vue.prototype.$video = Video;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
