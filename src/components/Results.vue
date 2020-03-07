<template>
  <div class="Results">
    <b-container style="width:90vw;">
      <!-- Content here -->
      <input type="text" v-model="search" placeholder="Search title.." />
      <b-row align-h="center" class="mt-5 text-center">
        <b-col v-for="post in filteredList" :key="post.id">
          <b-card
            :title="post.title"
            img-src="https://i.imgur.com/1PCyDuD.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="w-100"
            style="min-width:15vw"
          >
            <template v-slot:footer>
              <b-button
                target="_blank"
                href="https://i.imgur.com/1PCyDuD.jpg"
                variant="dark"
              >
                Go somewhere
              </b-button>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Results",
  data() {
    return {
      postList: [],
      search: ""
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  created() {
    axios.get("/api/getposts").then(response => {
      this.postList = response.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
