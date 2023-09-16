<template>
  <v-container color="background" fluid class="background bg">
    <v-row class="">
      <v-col lg="6" sm="12">
        <h2 class="intro text-center">Bonjour</h2>
        <p class="description">
          TechSolutions Pro is a dynamic and innovative information technology
          startup dedicated to simplifying and optimizing your digital world. We
          specialize in providing cutting-edge IT solutions and services
          tailored to meet the unique needs of businesses of all sizes. Our team
          of highly skilled experts is committed to delivering top-notch IT
          services, including network infrastructure setup, cybersecurity
          solutions, cloud computing implementation, software development, and
          IT consulting. We understand that technology is the backbone of modern
          businesses, and our mission is to empower organizations by harnessing
          the full potential of technology to drive growth and efficiency. At
          TechSolutions Pro, we believe in a customer-centric approach. We work
          closely with our clients to identify their IT challenges and develop
          customized strategies that align with their goals and budget. Our
          solutions are not only designed to resolve immediate issues but also
          to future-proof your IT infrastructure, ensuring scalability and
          security as your business grows. In a rapidly evolving digital
          landscape, TechSolutions Pro is your trusted partner for all things
          IT. Our dedication to innovation, reliability, and excellence sets us
          apart, making us the go-to IT company for businesses seeking a
          competitive edge in today's technology-driven world. Kenwaves
          Solutions is a forward-thinking information technology startup
          dedicated to revolutionizing the way businesses harness technology for
          success. With a focus on innovation and customer satisfaction, we
          offer a range of IT services and solutions designed to empower
          organizations to thrive in the digital age. Our mission is to provide
          you with a seamless solutions experience, ensuring you find exactly
          what you are looking for. We take great pride in delivering top-notch
          technological services, and our knowledgeable team is always ready to
          assist you with any inquiries or concerns you may have.Your
          satisfaction is our top priority, and we strive to exceed your
          expectations with every interaction. Choose TechSolutions Pro for IT
          expertise that transforms your challenges into opportunities and
          drives your business toward a brighter, more efficient future.
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
      <v-col lg="6" sm="12" class="text-end text-center hidden-sm-and-down">
        <v-img
          class="text-end move-all-directions"
          width="500"
          height="500"
          cover
          src="./../assets/hero.png"
          alt="hero-image"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script></script>

<style>
.bg {
  background-color: #969b95;
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
  font-size: 60px;
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
p.description {
  font-size: 20px;
  margin: 32px 0px;
  font-family: cursive;
  color: #f5f1f1ef;
}
/* Define the initial position of the image */
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
