import { createRouter, createWebHistory } from "@ionic/vue-router";
import type { RouteRecordRaw } from "vue-router";

import Negocio from "@/views/Negocio.vue";
import Tecnico from "@/views/Tecnico.vue";
import KPIs from "@/views/KPIs.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard/negocio",
  },
  {
    path: "/dashboard/negocio",
    component: Negocio,
  },
  {
    path: "/dashboard/tecnico",
    component: Tecnico,
  },
  {
    path: "/dashboard/kpis",
    component: KPIs,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;