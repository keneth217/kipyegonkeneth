<template>
  <v-app>
    <v-main>
      <NavigationBar />
      <v-content transition="slide-x-transition">
        <router-view></router-view>
      </v-content>
      <FooterComponent/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue"
export default {
  name: "App",
  components: {
    NavigationBar,FooterComponent,
  },
};
</script>
