<template>
    <v-container  fluid class="bg ">
        <v-row>
            <v-col class="text-center" justify="center">
              
                    <h3 class="hey blinking-text">This page  not available</h3>
                    <router-link to="/"> return to homepage</router-link>
                 
            </v-col>
        </v-row>
    </v-container>

</template>
<style scoped>
.bg{
    background-color: rgb(180, 183, 185);
    height: 100vh;
}
.hey{
    margin-top: 300px;
    margin-bottom: 20px;
    text-decoration: none !important;
}

  @keyframes blink {
    0%, 19.9% {
      color: red; /* First color */
    }
    20%, 39.9% {
      color: green; /* Second color */
    }
    40%, 59.9% {
      color: blue; /* Third color */
    }
    60%, 79.9% {
      color: orange; /* Fourth color */
    }
    80%, 100% {
      color: purple; /* Fifth color */
    }
  }

  .blinking-text {
    animation: blink 2s infinite; /* Adjust duration as needed */
  }
</style>