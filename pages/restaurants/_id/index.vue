<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row v-if="restaurant">
          <v-col
            class="mt=60"
            sm="6"
            md="4"
            v-for="dish in restaurant.dishes"
            :key="dish.id"
          >
            <v-card class="mx-auto">
              <v-img v-if="dish.image" :src="dish.image"></v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title">{{
                    dish.name
                  }}</v-list-item-title>
                  <v-list-item-title>{{ dish.description }}</v-list-item-title>
                  <v-list-item-title>N{{ dish.price }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <!-- :data-item-url="dish.storeUrl" -->
                <!-- :data-item-url="$route.fullPath" -->

                <v-btn
                  dark
                  block
                  class="snipcart-add-item"
                  :data-item-id="dish.id"
                  :data-item-name="dish.name"
                  :data-item-image="dish.image"
                  :data-item-price="dish.price"
                  :data-item-url="$route.fullPath"
                  :data-item-description="dish.description"
                >
                  Add to cart
                </v-btn>
              </v-card-actions>
            </v-card>
            <br />
          </v-col>
        </v-row>
        <v-row v-if="!restaurant" justify="center" align="center">
          <v-col sm="6" md="4">
            <v-card class="mx-auto">
              <v-img
                src="https://www.pakistantribe.com/wp-content/uploads/2015/03/Opss-300x180.jpg"
              ></v-img>
              <v-card-title>No dish found !!!</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import restaurantQuery from "@/apollo/queries/restaurant";
export default {
   name: 'Dishes',
  head() {
    return {
      title: 'Dishes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dishes'
        }
      ]
    }
  },
  data() {
    return {
      restaurant: {},
      storeUrl: process.env.storeUrl,
    };
  },
  apollo: {
    restaurant: {
      prefetch: true,
      query: restaurantQuery,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
    },
  },
};
</script>
