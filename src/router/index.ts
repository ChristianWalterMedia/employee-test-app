import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import EmployeeView from "../views/EmployeeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/dashboard/employee/:id",
    name: "employee",
    component: EmployeeView,
  },
  {
    path: "*",
    redirect: "/dashboard",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
