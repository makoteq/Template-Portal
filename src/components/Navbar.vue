<template>
  <div>
    <nav id="nav">
      <router-link :to="{ name: 'Home' }">
        <div class="item home"><span>Home</span></div></router-link
      >
      <a href="#" v-on:click="logout"
        ><div class="item_sm logout"><span class="login">Logout</span></div></a
      >
      <div class="item_sm">|</div>
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
  margin-bottom: 5vh;
}

.item {
  float: left;
  height: 100%;
  width: 20%;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-weight: 800;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
  &:hover {
    background-color: #323536;
  }
}
.item_sm {
  float: right;
  height: 100%;
  width: 10%;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-weight: 800;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
  &:hover {
    background-color: #323536;
  }
}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
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
}
</style>
