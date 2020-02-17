<template>
  <div class="Results">
    <b-container style="width:50vw;">
      <!-- Content here -->
      <b-row>
        <b-card
          title="Card Title"
          img-src="https://i.imgur.com/1PCyDuD.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 220px;height:350px;float:left"
          class="mb-2"
        >
          <template v-slot:footer>
            <b-button
              target="_blank"
              href="https://i.imgur.com/1PCyDuD.jpg"
              variant="dark"
            >
              Go somewhere
            </b-button>
          </template>
        </b-card>
        <b-card
          title="Card Title"
          img-src="https://i.imgur.com/1PCyDuD.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 220px;height:350px;float:left"
          class="mb-2"
        >
          <template v-slot:footer>
            <b-button
              target="_blank"
              href="https://i.imgur.com/1PCyDuD.jpg"
              variant="dark"
            >
              Go somewhere
            </b-button>
          </template>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Results"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
