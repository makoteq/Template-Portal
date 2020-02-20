<template>
  <div class="Results">
    <b-container style="width:50vw;">
      <!-- Content here -->
      <input type="text" v-model="search" placeholder="Search title.." />
      <b-row>
        <b-card
          v-for="post in filteredList"
          :key="post.id"
          :title="post.title"
          img-src="https://i.imgur.com/1PCyDuD.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 220px;height:350px;margin:10px;float:left"
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
  name: "Results",
  data() {
    return {
      postList: [
        {
          id: "1",
          title: "first"
        },
        {
          id: "2",
          title: "second"
        },
        {
          id: "3",
          title: "third"
        }
      ],
      search: ""
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
