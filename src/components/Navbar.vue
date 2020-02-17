<template>
  <div>
    <nav id="nav">
      <div class="item"></div>
      <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
#nav {
  height: 10vh;
  background-color: #373a3c;
}

.item {
  height: 100%;
  width: 30%;
}
</style>
