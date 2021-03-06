import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Dashboard from "@/views/Dashboard";
import Login from "@/views/Login";
import Upload from "@/views/Upload";

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
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload
    }
  ]
});
