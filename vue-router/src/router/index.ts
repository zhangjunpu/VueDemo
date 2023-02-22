import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
    children: [
      {
        path: "",
        components: {
          default: () => import("@/views/about/AboutHome.vue"),
          setting: () => import("@/views/about/AboutSetting.vue"),
          other: () => import("@/views/about/AboutOther.vue"),
        },
      },
    ],
  },
  {
    path: "/detail/:id?",
    name: "detail",
    component: () => import("@/views/DetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log("to", to);
  // console.log("from", from);
  next();
});
export default router;
