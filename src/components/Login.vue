<template>
  <div>
    <b-container style="width:100vw;height:70vh">
      <h2>Login</h2>
      <form v-on:submit="login">
        <input placeholder="ID" type="text" name="id" required /><br />
        <input
          placeholder="PASSWORD"
          type="password"
          name="password"
          required
        /><br />
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
    login: (e) => {
      e.preventDefault();
      let id = e.target.elements.id.value;
      let password = e.target.elements.password.value;

      let login = () => {
        let data = {
          email: id,
          password: password,
        };

        axios
          .post("/api/login", data)
          // eslint-disable-next-line no-unused-vars
          .then((response) => {
            router.push("/dashboard");
            console.warn(response);
          })
          .catch((errors) => {
            console.warn(errors);
          });
      };
      login();
    },
  },
};
</script>
v-<style lang="scss" scoped>
@import "../assets/colors.scss";
input {
  background-color: #f3f3f3;
  border: none;
  line-height: 1.5;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  transition: all 0.4s;
  &:focus {
    outline: 0;
    background-color: #dbdbdb;
  }
}
</style>
