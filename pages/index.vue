<template>
  <v-container>
    <v-card flat max-width="400px" class="mx-auto">
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-icon class="my-8" size="90" color="pink"
              >mdi-food-fork-drink</v-icon
            >
            <h1 class="display-2 font-weight-bold mb-4 text--black">
              Chop Kitch
            </h1>
            <h4 class="headline mb-6">African delicacies at its BEST!</h4>
            <br />
            <section class="snipcart-customer-signin">
              <n-link to="/restaurants">
                <v-btn block dark>come chop!</v-btn>
              </n-link>
            </section>
            <br />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import restaurantsQuery from "@/apollo/queries/restaurants";
export default {
  name: "HomePage",
  head() {
    return {
      title: "Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page",
        },
      ],
    };
  },
};
</script>
