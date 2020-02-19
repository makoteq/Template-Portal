<template>
  <div>
    <nav id="nav">
      <div class="item"></div>
      <router-link :to="{ name: 'Login' }">Login</router-link>|
      <a href="#" v-on:click="logout">Logout</a>
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
  height: 100%;
  width: 30%;
}
</style>
