<template>
  <div style="margin:3vh">
    <nav id="actionbar">
      <div style="text-align:center;">
        <router-link :to="{ name: 'Upload' }">
          <span>ADD<b-icon-plus></b-icon-plus></span
        ></router-link>
        <router-link :to="{ name: 'Login' }"> <span>| Login</span></router-link>
        <span @click="logout"> | Logout</span>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Actionbar",
  methods: {
    logout: function() {
      axios.get("/api/logout");
      router.push({ name: "Home" });
    }
  },
  data() {
    return {
      route: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/colors.scss";
#actionbar {
  text-align: center;
  font-weight: 800;
  width: 100%;
  margin: 0 auto;
  color: $brown;
  span {
    cursor: pointer;
    margin: 0 auto;
    &:hover {
      text-decoration: none;
      color: #f26522;
    }
  }
}
a {
  text-decoration: none;
  color: $brown;
  &:hover {
    text-decoration: none;
  }
}
</style>
