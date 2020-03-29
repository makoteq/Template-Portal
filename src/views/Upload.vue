<template>
  <div>
    <b-container style="width:100vw;height:70vh">
      <h2>Upload template</h2>
      <form method="post" enctype="multipart/form-data" action="/api/upload">
        <input
          placeholder="Title"
          v-model="data"
          @change="check"
          type="text"
          name="title"
          required
        /><img
          v-show="is_exist"
          width="45px"
          src="https://img.icons8.com/flat_round/64/000000/ok-hand.png"
        /><br />
        <input name="terms" type="checkbox" required />
        <label for="terms">Akceptuję <a href=""> regulamin </a>serwisu</label
        ><br />
        <input style="color:black" type="file" name="file" required />
        <input type="submit" :disabled="!is_exist" value="Submit" />
      </form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
export default {
  name: "upload",
  data() {
    return {
      is_exist: 0,
      data: ""
    };
  },
  methods: {
    check: debounce(function() {
      this.is_exist = 0;
      let data = {
        title: this.data
      };

      axios
        .post("/api/check_if_exist", data)
        // eslint-disable-next-line no-unused-vars
        .then(response => {
          console.warn(response);
          if (response.data[0].title == data.title) {
            this.is_exist = 1;
          } else {
            this.is_exist = 0;
          }
        })
        .catch(errors => {
          console.warn(errors);
        });
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
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
a {
  color: $green;
  &:hover {
    color: $green;
  }
}
</style>
