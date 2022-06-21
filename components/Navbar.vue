<template>
  <div class="flex w-full pt-2 items-center max-w-3xl mx-auto">
    <div class="w-1/5 md:w-1/2 align-left">
      <nuxt-link to="/">
        <logo />
      </nuxt-link>
    </div>
    <div class="w-4/5 md:w-1/2 text-right">
      <a
        class="mr-4"
        target="_blank"
        rel="noopener noreferer"
        href="https://twitter.com/heyjordn"
        >Twitter</a
      >
      <a
        class="mr-4"
        target="_blank"
        rel="noopener noreferer"
        href="https://github.com/heyjordn"
        >Github</a
      >
      <a
        class="mr-4"
        target="_blank"
        rel="noopener noreferer"
        href="https://www.linkedin.com/in/heyjordn/"
        >LinkedIn</a
      >
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/booking" class="primary-button hidden sm:inline-block"
        >Let's Talk</nuxt-link
      >
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
.primary-button {
  white-space: nowrap;
  @apply bg-primary;
  @apply px-4 py-2 mx-3;
  @apply text-white rounded-sm;
}
</style>
