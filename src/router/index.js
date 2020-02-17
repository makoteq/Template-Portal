import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Dashboard from "@/components/Dashboard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    }
  ]
});
