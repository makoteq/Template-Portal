<template>
  <div>
    <footer>
      <b-container style="color:black; height:20vh">
        <b-row
          style="padding:0;max-width:100vw;"
          class="justify-content-md-center"
        >
          <b-col style="padding:0;max-width:100vw" col lg="2">
            <span>Admin</span>
            <p class="list">
              <router-link :to="{ name: 'Dashboard' }"
                ><i>Admin panel</i></router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'Login' }"> <i>Login</i></router-link>
            </p>
            <p><i @click="logout">Logout</i></p>
          </b-col>
          <b-col style="padding:0;max-width:100vw" cols="12" md="auto"
            ><span>Contact</span>
            <p class="list">
              <router-link :to="{ name: 'Home' }"><i>Mail</i></router-link>
            </p>
          </b-col>
          <b-col style="padding:0;max-width:100vw" col lg="2"
            ><span>Other</span>
            <p class="list">
              <router-link :to="{ name: 'Home' }"
                ><i>Licence & terms</i></router-link
              >
            </p>
            <p class="list">
              <router-link :to="{ name: 'Home' }"><i>Team</i></router-link>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Footer",
  methods: {
    logout: function() {
      axios.get("/api/logout");
      router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/colors.scss";
span {
  color: $green;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
}
footer {
  margin-top: 20vh;
  background-color: $main;
  padding: 70px 0px;
}
.list {
  margin: 5px;
}
a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: rgb(219, 219, 219);
  }
}
i {
  cursor: pointer;
  color: white;
}
</style>
