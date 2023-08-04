<template>
  <v-footer color="primary" fixed dark class="icons">
    <v-col lg="12">
      <v-row justify="center">
        <v-col lg="4" sm="12" class="text-center">
          
            <div class="title mb-5">KENN WAVES</div>
          
            <v-card class="text-center"
            width="100"
            height="100"
            >
              <v-img
                class="text-center justify-center"
               
                src="./../assets/protection.png"
                alt="hero-image"
              />
            </v-card >
         
          <h6 class="hello">Never give up,Believe in your self,Work smart,Its never too late !!!!!</h6>
          <!-- <v-subheader>
              Your satisfaction is our top priority, and we strive to exceed your
              expectations with every interaction. We also offer secure and
              convenient payment options to ensure your transactions are safe and
              hassle-free.
            </v-subheader> -->
        </v-col>
        <v-col lg="4" sm="12" class="text-center">
          <v-col>
            <v-toobar-title class="title mb-5">Social Links</v-toobar-title>
          </v-col>
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 black--text"
              icon
              color="warning"
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <!-- <v-form class="mt-4">
              <v-text-field
                label="email"
                variant="outlined"
                class="text-overline text-grey-darken-3 mx-2"
                outlined
                dense
              /> </v-form>
              <v-btn rounded class="mb-2" color="success">subscribe us</v-btn> -->
        </v-col>
        <v-col lg="4" sm="12" class="text-center">
          <v-col>
            <v-toobar-title class="title mb-5">Contacts</v-toobar-title>
          </v-col>
          <div class="text-center justify-center">
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
      <v-row class="text-center mt-4">
        <v-col color="primary" class="mb-0 bottom">
          <v-subheader>
            <h4 class="bottom">
              Designed by kipyegonkeneth &copy;{{
                new Date().getFullYear()
              }}.All Rights Reserved
            </h4>
          </v-subheader>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-github"],
  }),
};
</script>
<style scoped>
h4.bottom {
  color: rgb(14, 14, 14);
  font-family: cursive;
  box-shadow: 5px;
}
.title {
  color: hsl(270, 8%, 95%);
  box-shadow: 10px;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "cursive",
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  text-transform: uppercase;
}
.icons {
  font-family: cursive;
}
.hello{
  font-family: cursive;
  font-style: bold;
  color: red;
  font-size: 15px;
  text-decoration: wavy;
}
</style>
