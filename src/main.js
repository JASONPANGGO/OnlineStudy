import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import { fetchPost } from "./lib/fetch";
import "element-ui/lib/theme-chalk/index.css";

import "../node_modules/video.js/dist/video-js.min.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$fetchPost = fetchPost;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
