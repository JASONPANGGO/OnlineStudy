import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Videos from './views/Videos.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        path: "/home"
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/videos",
      name: "videos",
      component: () => import("./views/Videos.vue")
    },
    {
      path: "/exams",
      name: "exams",
      component: () => import("./views/Exams.vue")
    },
    {
      path: "/exams",
      name: "exams",
      component: () => import("./views/Exams.vue")
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: () => import("./views/UserInfo.vue")
    },
    {
      path: "/classList",
      name: "classList",
      component: () => import("./views/classList.vue")
    }
  ]
});
