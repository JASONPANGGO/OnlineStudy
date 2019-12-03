import Vue from "vue";
import Router from "vue-router";
import { fetchPost } from "./lib/fetch";
import routerConfig from "./lib/routerConfig";
// import Videos from './views/Videos.vue'

Vue.use(Router);
const router = new Router(routerConfig);
router.beforeEach(async (to, from, next) => {
  // token 验证
  const userKey = localStorage.getItem("loginKey");

  // 验证 token
  if (userKey) {
    let result = await fetchPost("/", { token: userKey }).then(
      data => data,
      err => err
    );
    if (result.status === 200) {
      if (to.path === "/login") {
        next("/");
      }
    } else {
      localStorage.clear();
      next("/login");
    }
  } else if (to.path !== "/login") {
    next("/login");
  }
  next();
});

export default router;