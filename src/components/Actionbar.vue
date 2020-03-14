<template>
  <div style="margin:3vh">
    <nav id="actionbar">
      <router-link :to="{ name: 'Upload' }">
        <span>ADD<b-icon-plus></b-icon-plus></span
      ></router-link>
      <span>| Login</span><span> | Logout</span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Actionbar"
};
</script>

<style lang="scss" scoped>
#actionbar {
  font-weight: 800;
  span {
    cursor: pointer;
  }
}
a {
  text-decoration: none;
  color: #f26522;
  &:hover {
    text-decoration: none;
    color: #f26522;
  }
}
</style>
