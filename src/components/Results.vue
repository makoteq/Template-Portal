<template>
  <div class="Results">
    <b-container style="width:90vw;">
      <!-- Content here -->
      <input
        class="input"
        type="text"
        v-model="search"
        placeholder="Search title.."
      />
      <b-row align-h="center" class="mt-5 text-center">
        <b-col
          style="text-align:center"
          v-for="post in filteredList"
          :key="post.id"
        >
          <b-card
            :title="post.title"
            img-src="https://i.imgur.com/1PCyDuD.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="w-100 card"
          >
            <template v-slot:footer>
              <b-button
                target="_blank"
                href="https://i.imgur.com/1PCyDuD.jpg"
                variant="dark"
                class="buttpn"
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
<style scoped lang="scss">
@media screen and (min-width: 320px) {
  .card {
    min-width: 15vw;
    max-width: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .card {
    min-width: 15vw;
    max-width: 25%;
  }
}
.card {
  margin: 0 auto;
  margin-top: 10px;
}
.input {
  width: 40vw;
  height: 40px;
  border: none;
  border-bottom: solid 2px #373a3c;
  border-radius: 5px;
  &:focus {
    outline: 0 !important;
  }
}
</style>
