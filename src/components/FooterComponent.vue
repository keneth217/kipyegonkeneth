<template>
  <v-footer fluid fixed class="bg-surface-variant icons" color="primary">
    <v-container>
      <v-row >
        <v-col lg="4" sm="12">
          <div class="title mb-5">ABOUT</div>

          <!-- <v-card class="text-center" width="100" height="100">
          <v-img
            class="text-center justify-center"
            src="./../assets/protection.png"
            alt="hero-image"
          />
        </v-card> -->

          <h6 class="hello">
            Never give up,Believe in your self,Work smart,Its never too late
            !!!!!
          </h6>
        </v-col>
        <v-col lg="4" sm="12">
          <div class="title mb-5">SOCIAL LINKS</div>

          <v-card-text>
            <router-link to="icon.route">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
              color="warning"
            >
              <v-icon size="24px">
                {{ icon.social }}
              </v-icon>
            </v-btn>
          </router-link>
          </v-card-text>
        </v-col>

        <v-col lg="4" sm="12">
          <div justify="center" class="title mb-5">CONTACTS</div>

          <div class="text-center" justify="center">
            <v-subheader class="d-flex icons">
              <v-icon color="success" class="mx-5">mdi-phone</v-icon>
              phone:0711766223
            </v-subheader>
            <v-subheader class="d-flex icons">
              <v-icon color="success" class="mx-5">mdi-email</v-icon>
              email:kipyegonkeneth@gmail.com
            </v-subheader>
            <v-subheader class="d-flex icons">
              <v-icon color="success" class="mx-5">mdi-book</v-icon>
              Adress: 89,Nakuru-kenya
            </v-subheader>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center" class="text-center">
        <v-col>
          <h4 justify="center" class="bottom">
            Designed by kipyegonkeneth &copy;{{ new Date().getFullYear() }}.All
            Rights Reserved
          </h4>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    // icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-github"],
    icons:[
      {social: "mdi-facebook", route: "https://github.com/keneth217"},
      {social: "mdi-twitter", route: "https://github.com/keneth217"},
      {social: "mdi-linkedin", route: "https://github.com/keneth217"},
      {social: "mdi-github", route: "https://github.com/keneth217"},
    ]
  }),
};
</script>
<style>
h4.bottom {
  color: rgb(14, 14, 14);
  font-family: cursive;
  box-shadow: 5px;
}
.title {
  color: hsl(270, 8%, 95%);
  text-shadow: 5px 2px 5px black;

  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "cursive",
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  text-transform: uppercase;
}
.icons {
  font-family: cursive;
}
.hello {
  font-family: cursive;
  font-style: bold;
  color: rgb(234, 228, 228);
  font-size: 15px;
  text-decoration: wavy;
}
</style>
