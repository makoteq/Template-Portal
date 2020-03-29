<template>
  <div>
    <b-container style="width:100vw;height:70vh">
      <h2>Upload template</h2>
      <form method="post" enctype="multipart/form-data" action="/api/upload">
        <input placeholder="Title" type="text" name="title" required /><br />
        <input name="terms" type="checkbox" required />
        <label for="terms">Akceptuję <a href=""> regulamin </a>serwisu</label
        ><br />
        <input style="color:black" type="file" name="file" required />
        <input type="submit" value="Submit" />
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "upload"
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
