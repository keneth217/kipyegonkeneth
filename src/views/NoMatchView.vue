<template>
  <v-container fluid class="bg">
    <v-row>
      <v-col class="text-center" justify="center">
        <v-carousel
          cycle
          height="100"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">{{ slide }} Slide</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-row>
        <v-col class="text-center" justify="center">
          <h3 class="blinking-text">404</h3>
          <h3 class="error">PAGE NOT FOUND</h3>
          <p class="text">
            But if you don't change your direction,<br />
            and if you keep looking,
            <br />
            you may end up where you heading.
          </p>
          <v-button color="green" outline>
            <router-link to="/" class="text-decoration-none take">
              Take me Home</router-link
            >
          </v-button>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
<style scoped>
.bg {
  background-color: rgb(120, 93, 179);
  height: 100%;
}
.error {
  text-align: center;
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
}
.text {
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  color: black;
}
.take {
  color: green;
  font-size: 20px;
}

@keyframes blink {
  0%,
  19.9% {
    color: red; /* First color */
  }
  20%,
  39.9% {
    color: green; /* Second color */
  }
  40%,
  59.9% {
    color: blue; /* Third color */
  }
  60%,
  79.9% {
    color: orange; /* Fourth color */
  }
  80%,
  100% {
    color: purple; /* Fifth color */
  }
}

.blinking-text {
  animation: blink 2s infinite; /* Adjust duration as needed */
  font-size: 150px;
  margin-top: 200px;
  text-decoration: none !important;
}
</style>
