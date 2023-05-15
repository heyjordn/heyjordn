<template>
  <div class="flex w-full pt-2 items-center max-w-3xl mx-auto">
    <div class="w-1/5 md:w-1/2 align-left">
      <nuxt-link to="/" class="flex items-center">
        <logo class="pr-5 border-r-2" />
        <p class="ml-5 text-2xl font-display font-bold text-white">
          Jordan Jones
        </p>
      </nuxt-link>
    </div>
    <div class="w-4/5 md:w-1/2 text-right">
      <nuxt-link exact-active-class="active-link" class="link" to="/">
        Home
      </nuxt-link>
      <nuxt-link active-class="active-link" class="link" to="/about">
        About
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Logo from './Logo.vue'
export default {
  components: {
    logo: Logo,
  },
}
</script>

<style scoped>
a {
  @apply no-underline;
  @apply text-egg-white;
}
.link {
  @apply mr-4 pb-3;
}
.active-link {
  border-bottom: 3px solid #1c41ff;
}
</style>
