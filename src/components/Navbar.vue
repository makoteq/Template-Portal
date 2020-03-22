<template>
  <div>
    <nav id="nav">
      <router-link :to="{ name: 'Home' }">
        <div class="item home"><span>Home</span></div></router-link
      >
      >
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
  float: left;
  height: 100%;
  width: 20vw;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-weight: 800;
  display: table;
  text-transform: uppercase;
  font-size: 20px;
  &:hover {
    background-color: #323536;
  }
}
span {
  display: table-cell;
  vertical-align: middle;
}
@media screen and (min-width: 320px) {
  .item {
    width: 30%;
  }
}
</style>
