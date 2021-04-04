<template>
  <div class="w-full">
    <navbar />
    <div class="flex w-full justify-between">
      <div class="flex">
        <p>{{ formatDate(article.createdAt) }}</p>
      </div>
      <div></div>
    </div>
    <article class="container max-w-3xl mx-auto">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    navbar: Navbar,
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
