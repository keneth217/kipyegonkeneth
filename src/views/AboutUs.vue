<template>
  <v-container
    fluid
    class="background-image text-center hey bg justify-center d-flex"
  >
    <v-row>
      <v-col>
        <h2>about us</h2>
        <p>
          Kenwaves Solutions is a forward-thinking information technology
          startup dedicated to revolutionizing the way businesses harness
          technology for success. With a focus on innovation and customer
          satisfaction, we offer a range of IT services and solutions designed
          to empower organizations to thrive in the digital age. Our team of
          experienced IT professionals is passionate about solving complex
          technology challenges. We specialize in services such as IT
          infrastructure management, cybersecurity solutions, cloud computing
          optimization, software development, and IT consulting. Our approach is
          to understand the unique needs and goals of each client, providing
          tailored solutions that enhance efficiency, security, and
          productivity. Kenwaves Solutions prides itself on staying ahead of the
          curve when it comes to emerging technologies. We believe that
          technology should be an enabler, not a barrier, and we work closely
          with our clients to integrate cutting-edge solutions into their
          operations. Our commitment is not only to address immediate IT needs
          but also to create scalable, future-ready strategies that ensure
          long-term success. In a rapidly changing digital landscape, Kenwaves
          Solutions stands out as a trusted partner for businesses seeking
          innovative IT solutions. We are driven by a passion for excellence and
          a dedication to helping organizations thrive in the digital era. When
          you choose Kenwaves Solutions, you're choosing a partner that will
          guide you toward technological empowerment and success.
        </p>
        <h2>motto</h2>
        <p>Navigating Technology, Enabling Success</p>
        <h2>vission</h2>
        <p>
          To be the leading catalyst of technological transformation, empowering
          businesses to thrive in an ever-evolving digital world.
        </p>
        <h2>core values</h2>
        <div>
          <v-list lines="one">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :title="item.title"
              :subtitle="item.desc"
            ></v-list-item>
          </v-list>
        </div>
        <div>
          <p>
            Choose  Kenwaves Solutions for IT expertise that transforms your
            challenges into opportunities and drives your business toward a
            brighter, more efficient future.
             Kenwaves Solutions: Your Partner
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
.bg {
  background-color: rgb(152, 152, 144);
}
.background-image {
  background-position: center;
}
</style>
