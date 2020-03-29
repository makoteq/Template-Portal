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

      <b-card-group columns>
        <b-card
          :img-src="`${publicPath}img/` + post.title + `.png`"
          img-alt="Image"
          img-top
          v-for="post in filteredList"
          :key="post.id"
          tag="article"
          class="card"
        >
          <b-card-title style="font-weight:700">
            {{ post.title }}
          </b-card-title>
          <template v-slot:footer>
            <b-button
              target="_blank"
              @click="downloadWithAxios(post.title)"
              variant="success"
              class="button"
            >
              <span style="font-weight:700">Pobierz</span>
            </b-button>
          </template>
        </b-card>
      </b-card-group>
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
@import "../assets/colors.scss";
.input {
  width: 40vw;
  height: 40px;
  border: none;
  border-bottom: solid 5px $green;
  border-radius: 5px;
  margin-bottom: 5vh;
  background-color: $main2;
  &:focus {
    outline: 0 !important;
  }
}
.card {
  color: $green;
  border-radius: 25px;
  background-color: $main2;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
  }
}
</style>
