<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hide-lg-and-up bg-deep-purple dec"
      justify="center"
      theme="dark"
      floating
    >
      <v-list
        color="transparent text-decoration-none dec text-uppercase"
        density="compact"
        nav
        style="margin-top: 20px"
      >
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

      <!-- <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template> -->
    </v-navigation-drawer>

    <v-app-bar
      style="padding: 0px 90px"
      app
      class="bar"
      color="primary"
      elevate-on-scroll
    >
      <!-- <v-app-bar-nav-icon @click="toggleDrawer" /> -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up" />
      <v-toolbar-title class="title"> KENW</v-toolbar-title>
      <v-spacer />
      <div color="primary" class="d-flex align-center text-uppercase">
        <v-btn
          link
          class="text-uppercase hidden-md-and-down"
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.route"
        >
          <v-btn class="hidden-sm-and-down">{{ menu.title }}</v-btn>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menus: [
        { title: "Home", route: "/", icon: "mdi-account-box" },
        { title: "About", route: "/about", icon: "mdi-checkerboard" },
        { title: "Articles", route: "/articles", icon: "mdi-checkbox-multiple-blank-circle" },
        { title: "Account", route: "/accounts", icon: "mdi-account-multiple" },
        { title: "Contacts", route: "/contacts", icon: "mdi-format-list-bulleted" },
      ],
    };
  },
  computed: {},
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
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
<!-- color: rgb(52, 5, 84); -->
