<template>
  <v-container class="mb-12">
    <div>
      <v-app-bar dark fixed>
        <v-btn icon class="snipcart-checkout">
          <v-icon>mdi-cart-variant</v-icon>
          <span class="snipcart-items-count text-sm text-indigo-500"></span>
        </v-btn>
        <v-toolbar-title>Chop Kitch</v-toolbar-title>

        <v-spacer></v-spacer>

        <section class="hidden-xs-only">
          <nuxt-link to="/">
            <v-btn text> Home </v-btn>
          </nuxt-link>
          <nuxt-link to="/restaurants">
            <v-btn text> Restaurants </v-btn>
          </nuxt-link>
        </section>

        <v-spacer></v-spacer>

        <template>
          <section class="hidden-xs-only">
            <v-container>
              <v-btn outlined class="snipcart-user-logout" @click="logout">
                <a href="#" class="snipcart-user-logout">Log</a>out</v-btn
              >
            </v-container>
          </section>
          <section class="hidden-sm-and-up">
            <v-app-bar-nav-icon
              color="white"
              v-model="drawer"
              @click.stop="drawer = !drawer"
            />
          </section>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary right dark>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <br />
        <br /><br /><br />
        <div class="mx-4">
          <v-btn @click="logout" color="pink" block
            >Logout</v-btn
          >
        </div>
        <br><br>
        <a href="#" class="snipcart-user-logout">Logout</a>
      </v-navigation-drawer>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
          to: "/",
        },
        {
          title: "Restaurants",
          to: "/restaurants",
        },
      ],
    };
  },
  methods: {
    async logout() {
      // await this.$auth.logout();
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
};
</script>