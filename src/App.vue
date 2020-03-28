<template>
  <div id="app">
    <Navbar />
    <Actionbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Actionbar from "@/components/Actionbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    Actionbar
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
@import "./assets/colors.scss";
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $main2;
}
</style>
