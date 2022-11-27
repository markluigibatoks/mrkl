import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/HomeView.vue";
import Playground from "@/components/PlaygroundView.vue";
import MatchingPair from "@/components/MatchingPairView.vue";
import Tetris from "@/components/TetrisView.vue";
import Particles from "@/components/ParticlesView.vue";
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
    children: [
      {
        path: "matchingpair",
        name: "MatchingPair",
        component: MatchingPair,
      },
      {
        path: "tetris",
        name: "Tetris",
        component: Tetris,
      },
      {
        path: "particles",
        name: "Particles",
        component: Particles,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
