<template>
  <div class="home">
    <Searchbar />
    <Results />
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/Results.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "home",
  components: {
    Results,
    Searchbar
  }
};
</script>
