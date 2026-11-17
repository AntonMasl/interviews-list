import type { RouteRecordRaw } from "vue-router"
import { paths } from "./paths.ts"
import { RouteName } from "./route-names.ts"
import HomeView from "../views/home-view.vue"
import InterviewsView from "../views/interviews-view.vue"
import StatisticView from "../views/statistic-view.vue"

export const routes: RouteRecordRaw[] = [
  {
    path: paths.Home,
    name: RouteName.Home,
    component: HomeView,
  },
  {
    path: paths.Auth,
    name: RouteName.Auth,
    component: HomeView,
  },
  {
    path: paths.Interviews,
    name: RouteName.Interviews,
    component: InterviewsView,
  },
  {
    path: paths.Statistic,
    name: RouteName.Statistic,
    component: StatisticView,
  },
]
