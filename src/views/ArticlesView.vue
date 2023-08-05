<template>
  <v-container fluid class="text-center">
    <v-row>
      <v-col lg="3" sm="4" v-for="(lesson, index) in lessons" :key="index">
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          height="400"
          max-width="300"
        >
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
            height="150"
            :src="lesson.image"
            class="white--text align-end"
          >
          </v-img>
          <v-divider></v-divider>
          <div class="text-start mb-0 text-sm">
            <strong> <p class="text-center art">{{ lesson.title }}</p> </strong>
            <p>{{ lesson.description }}</p>
            <v-btn
              color="deep-purple-lighten-2"
              variant="text"
              @click="reserve"
            >
              <router-link to="/coming"> learn more</router-link>
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
        description:
          "Databases are crucial components in software development, used to store, manage, and retrieve data efficiently. They come in various types, including relational databases (e.g., MySQL, PostgreSQL), NoSQL databases (e.g., MongoDB, Cassandra), and others. ",
        image:
          "https://img.freepik.com/free-photo/data-center-with-server-racks-corridor-room-3d-render-digital-data-cloud-technology_482257-27722.jpg?size=626&ext=jpg&ga=GA1.2.685988909.1687504062&semt=sph",
        route: "/coming",
      },
      {
        title: "web design",
        description:
          "Web design refers to the process of creating the visual layout and user interface of a website. It involves planning, conceptualizing, and arranging the content, images, colors, fonts, and other elements to ensure an aesthetically pleasing and user-friendly website.",
        image:
          "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.685988909.1687504062&semt=sph",
        route: "/coming",
      },
      {
        title: "software",
        description:
          "Software refers to a collection of computer programs, data, and instructions that tell a computer how to perform specific tasks or operations. It is a set of digital instructions that enable hardware  to perform various tasks and functions. ",
        image:
          "https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
        route: "/coming",
      },
      {
        title: "Networking",
        description:
          "Networking, in the context of computers and technology, refers to the practice of connecting multiple devices or computers together to share resources, exchange data, and communicate with each other. Networking  enables devices to work together  .",
        image:
          "https://img.freepik.com/premium-photo/network-switch-ethernet-cables-data-center-concept_34936-175.jpg?size=626&ext=jpg&ga=GA1.2.685988909.1687504062&semt=sph",
        route: "comingsoon",
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
<style scoped>
.art{
  font-style: bold;
  text-transform: uppercase;
  color: rgb(215, 117, 219);
}
</style>