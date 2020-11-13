<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row v-if="restaurants">
          <v-col
            class="mt=60"
            sm="6"
            md="4"
            v-for="restaurant in restaurants"
            :key="restaurant.id"
          >
              <nuxt-link :to="`/restaurants/${restaurant.id}`">
                <v-card class="mx-auto">
                  <v-img
                    v-if="restaurant.image"
                    :src="restaurant.image"
                  ></v-img>
                  <!-- <v-card-title>{{ restaurant.name }}</v-card-title> -->
                  <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title class="title">{{ restaurant.name }}</v-list-item-title>
                    <v-list-item-title>{{ restaurant.description }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </nuxt-link>
            <br />
          </v-col>
        </v-row>
        <v-row v-if="!restaurants" justify="center" align="center">
          <v-col sm="6" md="4">
            <v-card class="mx-auto">
              <v-img
                src="https://www.pakistantribe.com/wp-content/uploads/2015/03/Opss-300x180.jpg"
              ></v-img>
              <v-card-title>No restaurant found !!!</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import restaurantsQuery from "@/apollo/queries/restaurants";
export default {
   name: 'Restaurants',
  head() {
    return {
      title: 'Restaurants',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Restaurants'
        }
      ]
    }
  },
  data() {
    return {
      restaurants: [],
    };
  },
  apollo: {
    restaurants: {
      prefetch: true,
      query: restaurantsQuery,
    },
  },
};
</script>
