<template>
  <div>
    <h2>Dashboard</h2>
    <h1>Welcome {{ user.name }}!</h1>
    <b-table :items="postList" :fields="fields" striped responsive="sm">
      <template v-slot:cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>
        <b-button
          @click="addEl(row.item.id, row.item.title)"
          size="sm"
          variant="info"
          class="mr-2"
        >
          ADD
        </b-button>
        <b-button
          @click="deleteEl(row.item.id, row.item.title)"
          size="sm"
          variant="danger"
          class="mr-2"
        >
          DELETE
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Image:</b></b-col>
            <img
              height="100"
              :src="`${publicPath}img/` + row.item.title + `.png`"
              alt="img"
            />
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Login",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      postList: [],
      user: {
        name: "",
      },
      fields: ["id", "title", "show_details"],
    };
  },
  methods: {
    deleteEl(id, title) {
      let data = {
        id: id,
        title: title,
      };
      axios
        .post("api/delete", data)
        .then((response) => {
          console.warn(response);
        })
        .catch((errors) => {
          console.warn(errors);
        });
      location.reload();
    },
    addEl(id, title) {
      let data = {
        id: id,
        title: title,
      };
      axios
        .post("api/add", data)
        .then((response) => {
          console.warn(response);
        })
        .catch((errors) => {
          console.warn(errors);
        });
      location.reload();
    },
    getUserData: function() {
      axios
        .get("/api/user")
        .then((response) => {
          this.user.name = response.data.user.name;
        })
        .catch((errors) => {
          console.log(errors);
          router.push("/");
        });
    },
  },
  created() {
    axios.get("/api/getposts_temp").then((response) => {
      this.postList = response.data;
    });
  },

  mounted() {
    this.getUserData();
  },
};
</script>
v-<style lang="scss">
td {
  color: white;
}
th {
  color: white;
}
</style>
