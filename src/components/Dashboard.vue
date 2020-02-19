/* eslint-disable no-unused-vars */
<template>
  <div>
    <h2>Dashboard</h2>
    <h1>Welcome {{ user.name }}</h1>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Login",
  data() {
    return {
      user: {
        name: ""
      }
    };
  },
  methods: {
    getUserData: function() {
      axios
        .get("/api/user")
        .then(response => {
          this.user.name = response.data.user.name;
        })
        .catch(errors => {
          alert("You dont have permision to see this");
          console.log(errors);
          router.push("/");
        });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>
