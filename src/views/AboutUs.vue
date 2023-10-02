<template>
  <v-container
    fluid
    class="background text-center hey bg text-align-center justify-center"
  >
    <v-row>
      <v-col>
        <h2 class="title ">about us</h2>
        <p class="story">
          Kenwaves solutions is a dynamic and innovative information technology
          startup dedicated to simplifying and optimizing your digital world. We
          specialize in providing cutting-edge IT solutions and services
          tailored to meet the unique needs of businesses of all sizes. Our team
          of highly skilled experts is committed to delivering top-notch IT
          services, including network infrastructure setup, cybersecurity
          solutions, cloud computing implementation, software development, and
          IT consulting. We understand that technology is the backbone of modern
          businesses, and our mission is to empower organizations by harnessing
          the full potential of technology to drive growth and efficiency. At
          Kenwaves solutions, we believe in a customer-centric approach. We work
          closely with our clients to identify their IT challenges and develop
          customized strategies that align with their goals and budget. Our
          solutions are not only designed to resolve immediate issues but also
          to future-proof your IT infrastructure, ensuring scalability and
          security as your business grows. In a rapidly evolving digital
          landscape,Kenwaves solutions is your trusted partner for all things
          IT. Our dedication to innovation, reliability, and excellence sets us
          apart, making us the go-to IT company for businesses seeking a
          competitive edge in today's technology-driven world. Kenwaves
          Solutions is a dedicated to revolutionizing the way businesses harness
          technology for success. Our mission is to provide you with a seamless
          solutions experience, ensuring you find exactly what you are looking
          for.Choose Kenwaves solutions for IT expertise that transforms your
          challenges into opportunities and drives your business toward a
          brighter, more efficient We are driven by a passion for excellence and
          a dedication to helping organizations thrive in the digital era. When
          you choose Kenwaves Solutions, you're choosing a partner that will
          guide you toward technological empowerment and success.
        </p>
        <h2 class="title ">motto</h2>
        <p class="story">Navigating Technology, Enabling Success</p>
        <h2 class="title">vission</h2>
        <p class="story">
          To be the leading catalyst of technological transformation, empowering
          businesses to thrive in an ever-evolving digital world.
        </p>
        <h3  class="title mb-12">our core values</h3>
        <div class="mb-2" v-for="(item, index) in items" :key="index">
          
          <h3 class="core story">{{index + 1}}.{{item.title}}</h3>
          <p class="story" >{{item.desc}}</p>
        
        </div>
        <div>
          <p class="mt-12 story">
            Choose Kenwaves Solutions for IT expertise that transforms your
            challenges into opportunities and drives your business toward a
            brighter, more efficient future. Kenwaves Solutions: Your Partner
            for Technological Empowerment and Success.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Innovation",
        desc: " We embrace change and continuously seek creative solutions to drive progress.",
      },
      {
        title: "Customer-Centricity",
        desc: " Our clients' success is our priority, and we tailor our solutions to meet their unique needs.",
      },
      {
        title: "Integrity",
        desc: "We uphold the highest ethical standards, ensuring trust and transparency in all our interactions.",
      },
      {
        title: "Excellence",
        desc: "We are committed to delivering top-tier IT services and solutions that exceed expectations.",
      },
      {
        title: "Collaboration:",
        desc: "We foster a collaborative environment, working together to achieve shared goals.",
      },
      {
        title: "Adaptability",
        desc: "We thrive in the face of change, adapting swiftly to the evolving technology landscape.",
      },
    ],
  }),
};
</script>

<style>
.background {
  background-image: url(./../assets/contact.svg);
  width: 100%;
  height: 800px;
  display: block;

  background-size: cover;
  top: 0;
}

.bg {
  background-color: rgb(152, 152, 144);
}
.core {
  text-transform: uppercase;
}
.story{
  text-align: center;
  color: #121212;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}
</style>
