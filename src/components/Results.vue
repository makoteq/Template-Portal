<template>
  <div class="Results">
    <b-container style="width:90vw;">
      <!-- Content here -->
      <form>
        <input
          class="input"
          type="text"
          v-model="search"
          placeholder="Search title.."
          name="search"
        />
      </form>
      <b-row align-h="center" class="mt-5 text-center">
        <b-col
          style="text-align:center"
          v-for="post in filteredList"
          :key="post.id"
        >
          <b-card
            :title="post.title"
            :img-src="`${publicPath}img/` + post.title + `.png`"
            img-alt="Image"
            img-top
            tag="article"
            class="w-100 card"
          >
            <template v-slot:footer>
              <b-button
                target="_blank"
                @click="downloadWithAxios(post.title)"
                variant="dark"
                class="buttpn"
              >
                Downloads
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
      search: "",
      publicPath: process.env.BASE_URL
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
  },
  methods: {
    forceFileDownload(response, post) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", post + ".png"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(post) {
      axios({
        method: "get",
        url: this.publicPath + "img/" + post + ".png",
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload(response, post);
        })
        .catch(error => console.log("error occured" + error));
    }
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
