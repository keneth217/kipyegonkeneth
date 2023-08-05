<template>
    <v-container fluid class="bg">
        <v-row>
            <v-col class="text-center coming">
                <h6 class="soon">coming soon</h6>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.coming{
    margin-top: 100px;
    font-size: 50px;
    text-shadow: 5px 2px 5px rgb(224, 18, 213);
    text-transform: uppercase;
    height: 40vh;
   
}
.bg{
    background-color: rgb(199, 199, 193);
}


/* Define the animation keyframes for rotation and color change */
@keyframes rotateText {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes blinkColors {
    0% {
      color: red;
    }
    25% {
      color: blue;
    }
    50% {
      color: green;
    }
    75% {
      color: orange;
    }
    100% {
      color: purple;
    }
  }
  
  /* Apply the animations to the element with the "soon" class */
  .soon {
    animation: rotateText 2s linear infinite, blinkColors 5s ease-in-out infinite;
  }
  
</style>