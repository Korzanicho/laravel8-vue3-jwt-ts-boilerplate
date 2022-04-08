import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import LoginUser from "@/views/LoginUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
      children: [
        {
          path: "defaultview",
          name: "defaultview",
          component: HomeView,
        },
        {
          path: "*",
          component: HomeView,
        },
      ],
    },
    {
      path: "/products",
      name: "products",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductsList.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterUser,
      meta: { requiresNoAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginUser,
      meta: { requiresNoAuth: true },
    },
    // {
    //   path: "*",
    //   name: "default",
    //   component: HomeView,
    //   meta: { requiresAuth: true },
    // },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
  } else if (
    to.matched.some((record) => record.meta.requiresNoAuth) &&
    loggedIn
  ) {
    next("/");
  } else {
    next();
  }
});
export default router;
