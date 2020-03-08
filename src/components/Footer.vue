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
          </b-col>
          <b-col style="padding:0;max-width:100vw" cols="12" md="auto"
            ><span>Social</span>
          </b-col>
          <b-col style="padding:0;max-width:100vw" col lg="2"
            ><span>Contact</span>
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
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
}
footer {
  background-color: rgb(55, 58, 60);
  padding: 70px 0px;
}
</style>
