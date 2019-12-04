import Home from "../views/Home.vue";
export default {
  routes: [
    {
      path: "/",
      redirect: {
        path: "/home"
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue")
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/news.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/videosBrower",
      name: "videosBrower",
      component: () => import("../views/videoBrowers.vue")
    },
    {
      path: "/exams",
      name: "exams",
      component: () => import("../views/Exams.vue")
    },

    {
      path: "/userinfo",
      name: "userinfo",
      component: () => import("../views/UserInfo.vue")
    },
    {
      path: "/classList",
      name: "classList",
      component: () => import("../views/classList.vue")
    },
    {
      path: "/videos",
      name: "videos",
      component: () => import("../components/Videos.vue")
    },
    {
      path: "/videoplay",
      name: "videoplay",
      component: () => import("../components/videoPlayer.vue")
    }
  ]
};