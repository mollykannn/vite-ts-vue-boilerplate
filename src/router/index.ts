import { createRouter, createWebHistory } from "vue-router";

const Router = createRouter({
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/index.vue"),
    },
  ],
});

export default Router;
