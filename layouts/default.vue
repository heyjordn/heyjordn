<template>
  <div class="flex flex-col w-full container mx-auto p-5 bg-dark-blue">
    <navbar class="mb-10" />
    <div class="max-w-3xl mx-auto">
      <Nuxt />
    </div>
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
<style></style>
