import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/HomeView.vue";
import Playground from "@/components/PlaygroundView.vue";
import NotFound from "@/components/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/playground",
    name: "Playground",
    component: Playground,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;