import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

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
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
