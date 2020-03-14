<template>
  <div>
    <form method="post" enctype="multipart/form-data" action="/api/upload">
      <input type="file" name="file" />
      <input type="text" name="title" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "upload"
};
</script>

<style lang="scss" scoped></style>
