import { createRouter, createWebHistory } from "vue-router";

import { Main, Sucessful } from "@/views";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/obrigado",
    name: "Sucessful",
    component: Sucessful,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
