<template>
  <div class="home">
    <Searchbar />
    <Results />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/Results.vue";
import Searchbar from "@/components/Searchbar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Results,
    Searchbar,
    Login
  }
};
</script>
