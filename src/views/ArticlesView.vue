<template>
  <v-container fluid class="text-center">
    <v-row>
      <v-col lg="3" sm="4" v-for="(lesson, index) in lessons" :key="index">
        <v-card :loading="loading" class="mx-auto my-12" height="400" max-width="300">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            cover
            height="200"
            :src="lesson.image"
            class="white--text align-end">
          </v-img>
          <v-divider></v-divider>
          <div class="text-center mb-0 text-sm-h6">
            <v-card-title>{{ lesson.title }}</v-card-title>
            <v-card-title>{{ lesson.description }}description</v-card-title>
            <v-btn
              color="deep-purple-lighten-2"
              variant="text"
              @click="reserve"
            >
              read more
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    lessons: [
      {
        title: "database",
        description: "database management",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        title: "web",
        description: "web design",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        title: "web",
        description: "web design",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
      {
        title: "web",
        description: "web design",
        image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      },
    ],
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
