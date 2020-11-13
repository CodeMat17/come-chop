<template>
  <v-app dark>
    <v-main>
      <Navbar />
      <v-container>
        <nuxt />
        <div hidden id="snipcart" :data-api-key="apiKey"></div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      apiKey: process.env.SNIPCART_API_KEY || 'ZWZhMmZlNjAtNzE4NS00ODg5LTg3ZDgtOTU3MTNlMGZlZDdiNjM3NDA4MDgyMTk3OTQyNjI0'
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
