<template>
  <v-app>
    <v-main>
      <NavigationBar />
<<<<<<< HEAD
   //   <router-view></router-view>
   //   <v-content transition="slide-x-transition"> 
  //     <router-view></router-view> 
 //    </v-content> 
//    <FooterComponent/>
    
    

=======
     // <v-content transition="slide-x-transition">
     
    //  </v-content>
      <FooterComponent/>
     
   <router-view v-slot="{component}">
     <transition name="route" mode="out-in">
       <component :is="component"></component>
   </transition>
   
   </router-view>
>>>>>>> 1b0823d3720c94cc4305036c5b578ffac0a8da17
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
<style>
  .router-enter-from{
    opacity:0;
    transform:translateX(100px);
  }
    .router-enter-active{
   transition:all 0.3s ease-out;
  }
    .router-enter-to{
    opacity:0;
    transform:translateX(-100px);
  }
    .router-leave-active{
   transition:all 0.3s ease-in;
  }
  </style>
