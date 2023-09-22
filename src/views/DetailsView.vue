<template>
  <v-container fluid class="mt-0 hist">
    <v-row>
      <v-col-auto fluid lg="12" class="history">
        <div>
          <h6 class="center" justify="center">skills</h6>
        </div>
      </v-col-auto>

      <v-col lg="3" v-for="(skill, i) in skills" :key="i">
        <v-card width="300">
          <v-img
            height="200"
            :src="skill.image"
            cover
            class="text-white text-center"
            justify="center"
          >
            <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
              <template v-slot:prepend>
                <v-btn icon="$menu"></v-btn>
              </template>

              <v-toolbar-title class="text-h6 title"
                >{{ skill.title }}
              </v-toolbar-title>

              <!-- <template v-slot:append>
                <v-btn icon="mdi-dots-vertical"></v-btn>
              </template> -->
            </v-toolbar>
          </v-img>

          <v-card-text>
            <v-timeline density="compact" align="start">
              <v-timeline-item
                :key="skill.language"
                :dot-color="skill.color"
                size="x-small"
              >
                <div class="mb-2">
                  <div class="font-weight-bold">
                    <strong>{{ skill.language }}</strong>
                  </div>
                  <div>{{ skill.lang }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col justify="center" class="text-center mx-2" lg="12"> 
       <v-btn color="primary" >
        <router-link class="more" to="/history">know more</router-link>
        <v-tooltip
        activator="parent"
        location="end"
      >EDUCATION & EXPERIENCE</v-tooltip>
      </v-btn>
      <v-btn  class="mx-2 me-2" color="primary" >
        <router-link class="more " to="/projects">my github projects</router-link>
        <v-tooltip
        activator="parent"
        location="end"
      >MY GITHUB PROJECTS AND LINKS</v-tooltip>
      </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    skills: [
      {
        title: "Front-End programming",
        image:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        color: "deep-purple-lighten-1",
        language: "Frameworks(React,Vue)",
        lang: "Css(Bootsrap,Tailwind,Vuetify)",
      },
      {
        title: "Back-End programming",
        image:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        color: "deep-purple-lighten-1",
        language: "Java(Spring boot)",
        lang: "php",
      },
      {
        title: "database",
        image:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        color: "green",
        language: "relational(Mysql,PostGresql)",
        lang: "Non-Relational(Firebase)",
      },
      {
        title: "servers",
        image:
          "https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg",
        color: "deep-purple-lighten-1",
        language: "Apache",
      },
    ],
  }),
};
</script>
<style scoped>
.history {
  background-image: url(./../assets/contact.svg);
  width: 100%;
  height: 200px;
  display: block;
  text-align: center;
  color: #f7f5f5;
  background-size: cover;
  font-display: block;
  box-shadow: 5px;
  font-size: 50px;
  border-left: 1px solid #b0aaaa;
  top: 0;
  text-transform: uppercase;
}
.hist {
  background-color: #b0aaaa;
}
.more{
  text-decoration: none;
}
.title{
  color: #1839dd;
  box-shadow: 5px;
  font-family: 'Times New Roman', Times, serif;
  text-transform: uppercase;
}
</style>
