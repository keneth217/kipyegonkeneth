<template>
  <v-app>
   
  
    <v-main>
      <NavigationBar />
   
    <!--       -->
    <!-- <router-view v-slot="{component}"> -->
    <!-- <transition name="router" mode="out-in"> -->
    <!-- <component :is="component"></component> -->
    <!-- </transition> -->
    <!-- </router-view> -->
    <router-view></router-view>
    <FooterComponent />
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
//import FooterView from "@/views/FooterView.vue"
export default {
  name: "App",
  components: {
    NavigationBar,
    FooterComponent,
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'montserrat','sans-serif';
}
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.router-enter-active {
  transition: all 0.3s ease-out;
}
.router-enter-to {
  opacity: 0;
  transform: translateX(-100px);
}
.router-leave-active {
  transition: all 0.3s ease-in;
}
</style>
