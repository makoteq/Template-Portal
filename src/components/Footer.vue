<template>
  <div>
    <footer>
      <b-container style="color:black; height:20vh">
        <b-row
          style="padding:0;max-width:100vw;"
          class="justify-content-md-center"
        >
          <b-col style="padding:0;max-width:100vw" col lg="2">
            <span>Admin</span>
            <p class="list">
              <router-link :to="{ name: 'Dashboard' }"
                ><i>Admin panel</i></router-link
              >
            </p>
          </b-col>
          <b-col style="padding:0;max-width:100vw" cols="12" md="auto"
            ><span>Social</span>
            <p class="list">
              <router-link :to="{ name: 'Home' }"><i>Facebook</i></router-link>
            </p>
          </b-col>
          <b-col style="padding:0;max-width:100vw" col lg="2"
            ><span>Contact</span>
            <p class="list">
              <router-link :to="{ name: 'Home' }"><i>Gmail</i></router-link>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
span {
  color: #f26522;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
}
footer {
  background-color: rgb(55, 58, 60);
  padding: 70px 0px;
}
.list {
}
a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: rgb(219, 219, 219);
  }
}
</style>
