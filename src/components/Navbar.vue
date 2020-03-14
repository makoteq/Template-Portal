<template>
  <div>
    <nav id="nav">
      <router-link :to="{ name: 'Home' }">
        <div class="item home"><span>Home</span></div></router-link
      >
      <a href="#" v-on:click="logout"
        ><div class="item_sm logout"><span class="login">Logout</span></div></a
      >
      <div class="item_sm"><span>|</span></div>
      <router-link :to="{ name: 'Login' }">
        <div class="item_sm login">
          <span class="login">Login</span>
        </div></router-link
      >
    </nav>
  </div>
</template>

<script>
import router from "../router";

import axios from "axios";
export default {
  name: "Navbar",
  methods: {
    logout: function() {
      axios.get("/api/logout").then(() => {
        router.push("/");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  height: 10vh;
  background-color: #373a3c;
}

.item {
  float: left;
  height: 100%;
  width: 20%;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-weight: 800;
  display: table;
  text-transform: uppercase;
  font-size: 20px;
  &:hover {
    background-color: #323536;
  }
}
.item_sm {
  float: right;
  height: 100%;
  width: 10%;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
  display: table;
  &:hover {
    background-color: #f26522;
  }
}
span {
  display: table-cell;
  vertical-align: middle;
}
.login {
  font-size: 15px;
}
@media screen and (min-width: 320px) {
  .item {
    width: 30%;
  }
}
@media screen and (min-width: 1200px) {
  .item_sm {
    display: table;
  }
}
</style>
