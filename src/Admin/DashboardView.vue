<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      class="hide-lg-and-up bg-deep-purple dec"
      justify="center"
      theme="dark"
      floating
    >
      <v-list
        color="transparent text-decoration-none dec text-uppercase"
        density="compact"
        nav
        style="margin-top: 50px"
      >
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Jane Smith"
          subtitle="Logged in"
        ></v-list-item>

        <v-divider></v-divider>
        <router-link
          class="dec"
          v-for="(menu, index) in menus"
          :to="menu.route"
          :key="index"
        >
          <v-list-item
            :prepend-icon="menu.icon"
            :title="menu.title"
            class="dec"
          ></v-list-item>
        </router-link>
      
           
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main> <!--  -->hello </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
const menus = [
  { title: "Dashboard", route: "/", icon: "mdi-account-box" },
  { title: "Articles", route: "/about", icon: "mdi-checkerboard" },
  {
    title: "Articles",
    route: "/articles",
    icon: "mdi-checkbox-multiple-blank-circle",
  },
  { title: "Account", route: "/accounts", icon: "mdi-account-multiple" },
  { title: "Contacts", route: "/contacts", icon: "mdi-format-list-bulleted" },
];
</script>
<style>
.title {
  color: #a31181;
  box-shadow: 5px;
  font-family: "Times New Roman", Times, serif;
}
.dec {
  text-decoration: none !important;
  text-transform: uppercase;
}
</style>
