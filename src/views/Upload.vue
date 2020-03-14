<template>
  <div>
    <form method="post" enctype="multipart/form-data" action="/api/upload">
      <input type="file" name="file" />
      <input type="text" name="name" />
      <input type="submit" value="Submit" />
    </form>
    <img src="/api/image.png" />
  </div>
</template>

<script>
export default {
  name: "upload"
};
</script>

<style lang="scss" scoped></style>
