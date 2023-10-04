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
      <v-button
        class="white-text text-center mx-2 text-decoration-none"
        color="indigo"
        rounded
      >
        <!-- Logout button -->
        <button @click="logout">Logout</button>
      </v-button>
    </v-app-bar>

    <v-main> <!--  -->hello </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // Import useRouter for navigation

export default {
  setup() {
    const drawer = ref(null);
    const router = useRouter(); // Get the router instance

    // Define the logout method
    const logout = () => {
       // Log before removing the token
  console.log('Before removing token:', localStorage.getItem('token'));
      // Clear the token from localStorage
      localStorage.removeItem("token");
       // Log after removing the token
  console.log('After removing token:', localStorage.getItem('token'));

      // Redirect the user to the login page
      router.push('accounts');
    };
    const menus = [
      { title: "Dashboard", route: "/", icon: "mdi-account-box" },
      { title: "Articles", route: "/about", icon: "mdi-checkerboard" },
      {
        title: "Articles",
        route: "/articles",
        icon: "mdi-checkbox-multiple-blank-circle",
      },
      { title: "Account", route: "/accounts", icon: "mdi-account-multiple" },
      {
        title: "Contacts",
        route: "/contacts",
        icon: "mdi-format-list-bulleted",
      },
    ];

    return {
      drawer,
      logout,
      menus, // Make the logout method available to the template
    };
  },
};
</script>

<style>
/* Your CSS styles here */
</style>

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
