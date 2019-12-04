import Vue from "vue";
import Router from "vue-router";
import { fetchPost } from "./lib/fetch";
import routerConfig from "./lib/routerConfig";
// import Videos from './views/Videos.vue'
import { mutations } from "./store.js";
Vue.use(Router);
const router = new Router(routerConfig);
router.beforeEach(async (to, from, next) => {
  // token 验证
  const userKey = localStorage.getItem("loginKey");
  // 验证 token
  let loginStatus = localStorage.getItem("loginStatus");
  if (userKey) {
    if (!loginStatus) {
      // 判断是否需要 鉴权
      let result = await fetchPost("/token", { token: userKey }).then(
        data => data,
        err => err
      );

      localStorage.setItem("loginStatus", true);
      // token 过期
      if (result.status === 200) {
        // 用户信息

        mutations.setUseinfo(result);
        if (to.path === "/login") {
          next("/");
        }
      } else {
        next("/login");
      }
    }
  } else if (to.path !== "/login") {
    localStorage.clear();
    next("/login");
  }
  next();
});
export default router;
