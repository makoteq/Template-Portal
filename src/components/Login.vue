<template>
  <div>
    <b-container style="width:70vw;height:70vh">
      <h2>Login</h2>
      <form v-on:submit="login">
        <input type="text" name="email" /><br />
        <input type="password" name="password" /><br />
        <input type="submit" value="Login" />
      </form>
    </b-container>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "Login",
  methods: {
    login: e => {
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;

      let login = () => {
        let data = {
          email: email,
          password: password
        };

        axios
          .post("/api/login", data)
          // eslint-disable-next-line no-unused-vars
          .then(response => {
            router.push("/dashboard");
            console.warn(response);
          })
          .catch(errors => {
            console.warn(errors);
          });
      };
      login();
    }
  }
};
</script>
