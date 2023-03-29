import { createWebHistory, createRouter } from "vue-router"
import Playground from "@/components/PlaygroundView.vue"
import MatchingPair from "@/components/MatchingPairView.vue"
import Particles from "@/components/ParticlesView.vue"
import Displacement from "@/components/MainView.vue"
import NotFound from "@/components/NotFoundView.vue"
import FEMNewsHomePage from "@/components/FEMNewsHomePage.vue"
import FEMDropdown from "@/components/FEMDropdown.vue"
import FEMNotifications from "@/components/FEMNotifications.vue"
import FEMAdviceSlip from "@/components/FEMAdviceSlip.vue"
import FEMRESTCountriesAPI from "@/components/FEMRESTCountriesAPI.vue"
import FEMView from "@/components/FEMView.vue"

const routes = [
  {
    path: "/pixi2d",
    name: "PixiJS",
    component: Playground,
    children: [
      {
        path: "matching-pair",
        name: "MatchingPair",
        component: MatchingPair
      },
      {
        path: "particles",
        name: "Particles",
        component: Particles
      },
      {
        path: "displacement",
        name: "Displacement",
        component: Displacement
      }
    ]
  },
  {
    path: "/fem",
    name: "FEM",
    component: FEMView,
    children: [
      {
        path: "news-home-page",
        name: "FEMNewsHomePage",
        component: FEMNewsHomePage
      },
      {
        path: "dropdown",
        name: "FEMDropdown",
        component: FEMDropdown
      },
      {
        path: "notifications",
        name: "FEMNotifications",
        component: FEMNotifications
      },
      {
        path: "advice-slip",
        name: "FEMAdviceSlip",
        component: FEMAdviceSlip
      },
      {
        path: "rest-countries-api",
        name: "FEMRESTCountriesAPI",
        component: FEMRESTCountriesAPI
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
