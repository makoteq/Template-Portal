<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
