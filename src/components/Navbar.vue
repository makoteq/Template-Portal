<template>
  <div>
    <nav id="nav">
      <router-link :to="{ name: 'Home' }">
        <div class="item home">
          <span
            ><img id="main" src="../assets/logo2.png" alt="logo"
          /></span></div
      ></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "../assets/colors.scss";
#nav {
  height: 10vh;
  width: 100%;
  background-image: url("../assets/background.png");
}
#main {
  transition: ease-out 0.1s;
  &:hover {
    transform: scale(1.2);
  }
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
