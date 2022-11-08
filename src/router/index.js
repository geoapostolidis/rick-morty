import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/characters",
      name: "characters",
      component: () => import("../views/Characters.vue"),
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
    }
  ],
});

export default router;
