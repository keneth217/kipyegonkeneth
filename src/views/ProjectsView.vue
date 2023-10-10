<template>
  <div class="background">
    <v-container>
      <v-row>
        <v-col class="title">
          <h6>My  Github Projects</h6>
        </v-col>
      </v-row>
      <v-row>

<v-col>
  <v-table
  :headers="headers"
  :items="desserts"
  class="elevation-1"
  density="compact"
  item-key="name"
>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Language</th>
        <th>URL</th>
        <th>Description</th>
        <th>Created At</th>
        <th>Date Updated</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="repo in repos" :key="repo.id">
        <td>{{ repo.id }}</td>
        <td>{{ repo.name }}</td>
        <td>{{ repo.language }}</td>
        <td><a :href="repo.html_url" target="_blank">{{ repo.html_url }}</a></td>
        <td>{{ repo.description }}</td>
        <td>{{ repo.created_at }}</td>
        <td>{{ repo.updated_at }}</td>
      </tr>
    </tbody>
  </v-table>
</v-col>

      </v-row>
    </v-container>

  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const repos = ref([]);

    const getRepos = () => {
      axios
        .get("https://api.github.com/users/keneth217/repos")
        .then((response) => {
          repos.value = response.data; // Assuming the API response is an array of repositories
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    onMounted(() => {
      getRepos();
    });

    return {
      repos,
    };
  },
};
</script>
<style scoped>
.background{
  background-size: cover; 
  background-image: url(./../assets/strait.svg);
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  top: 0;
}
.title {
  margin-top: 20px;
  font-size: 30px;
  color: #a31181;
  box-shadow: 5px ;
  font-family: "Times New Roman", Times, serif;
}
</style>
