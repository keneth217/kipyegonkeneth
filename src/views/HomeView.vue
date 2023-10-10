<template>
  <v-container color="background" fluid class="hey background">
    <v-row class="">
       <Modal />
      <v-col lg="6" sm="12">
        <div class="glass">
          <h2 class="intro text-center">Bonjour</h2>
        </div>

        <p class="description">
          Kenwaves solutions is a dynamic and innovative information technology
          startup dedicated to simplifying and optimizing your digital world. We
          specialize in providing cutting-edge IT solutions and services
          tailored to meet the unique needs of businesses of all sizes. Our team
          of highly skilled experts is committed to delivering top-notch IT
          services, including network infrastructure setup, cybersecurity
          solutions, cloud computing implementation, software development, and
          IT consulting. We understand that technology is the backbone of modern
          businesses, and our mission is to empower organizations by harnessing
          the full potential of technology to drive growth and efficiency.
        </p>
        <!-- <h4 class="intro mb-3">Happy shopping!</h4>
        <v-btn class="white-text my-5 mx-2" color="success" rounded
          >Get started</v-btn
        > -->
        <v-btn
          class="white-text text-center mx-2 text-decoration-none"
          color="indigo"
          rounded
        >
          <router-link
            style="text-decoration: none; color: inherit"
            to="/details"
          >
            about me
            <!-- <v-icon>mdi-play-circle</v-icon> ABOUT ME. -->
          </router-link>
        </v-btn>
        <v-btn
          class="white-text text-center mx-2 text-decoration-none"
          color="yellow"
          rounded
        >
          <router-link style="text-decoration: none; color: inherit" to="/us">
            about us
            <!-- <v-icon>mdi-play-circle</v-icon> ABOUT ME. -->
          </router-link>
        </v-btn>
      </v-col>
      <v-col lg="6" sm="12" class="text-center   hidden-sm-and-down">
        <v-img
          class=" image  move-all-directions"
          width="500"
          height="500"
          cover
          src="./../assets/hero.png"
          alt="hero-image"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-col> </v-col>
  </v-container>
</template>
<script>
import Modal from "@/views/ModalView.vue"; // Adjust the path as needed

export default {
  components: {
    Modal,
  },
};
</script>

<style scoped>
.image{
  top: 50%;
  left: 50%;
}

.background {
  background-image: url(./../assets/logo.svg);
  width: 100%;
  height: 800px;
  display: block;
  background-size: cover;
  top: 0;
}
h2.intro {
  font-size: 40px;
  font: bold;
  font-family: cursive;
  color: #f60de7;
}
h4.intro {
  font-size: 40px;
  font: bold;
  font-family: cursive;
  color: #41e40a;
}
.glass {
  height: 100px;
  width: 300px;
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* Glass background color with opacity */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Box shadow for the glass effect */
  backdrop-filter: blur(10px);
}
.glass::before,
.glass::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: rgba(
    255,
    255,
    255,
    0.4
  ); /* Circle background color with opacity */
  border-radius: 50%; /* Create a circle shape */
}

.glass::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.glass::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h2 {
  margin: 0;
  text-align: center;
  color: #333;
}
p.description {
  font-size: 20px;
  margin: 32px 0px;
  font-family: cursive;
  color: #f5f1f1ef;
}

.move-all-directions {
  position: relative;
  animation: moveAnimation 20s infinite;
}

@keyframes moveAnimation {
  /* Move up-left */
  0%,
  100% {
    top: 0;
    left: 0;
  }

  /* Move down */
  25% {
    top: 50px;
  }

  /* Move right */
  50% {
    left: 50px;
  }

  /* Move up */
  75% {
    top: 0;
  }
}
</style>
