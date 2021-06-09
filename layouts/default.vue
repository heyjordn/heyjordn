<template>
  <div class="flex flex-col w-full container mx-auto h-screen p-5">
    <navbar />
    <Nuxt />
    <main-footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    navbar: Navbar,
    'main-footer': Footer,
  },
})
</script>
<style>
html {
  background: #f7f7f7;
}
</style>
