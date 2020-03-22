<template>
  <div>
    <form method="post" enctype="multipart/form-data" action="/api/upload">
      <input placeholder="Title" type="text" name="title" required /><br />
      <input type="file" name="file" required />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "upload"
};
</script>

<style lang="scss" scoped>
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
