<template>
  <v-card color="warning">
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-items
          link
          class="text-uppercase"
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.route"
        >
        </v-list-items>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <v-app-bar
    style="padding: 0px 90px"
    app
    class="bar"
    color="pink"
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
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      drawer:false,
      menus: [
        { title: "home", route: "/" },
        { title: "about", route: "about" },

        { title: "Articles", route: "articles" },
        { title: "account", route: "accounts" },
        { title: "contacts", route: "contacts" },
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
</style>
<!-- color: rgb(52, 5, 84); -->
