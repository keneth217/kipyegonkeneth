<template>
  <v-app>
    <v-main>
      <NavigationBar />
      <router-view></router-view>
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
//import FooterView from "@/views/FooterView.vue"
export default {
  name: "App",
  components: {
    NavigationBar,
    FooterComponent,
  },
};
</script>
