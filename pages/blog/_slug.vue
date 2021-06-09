<template>
  <div class="w-full">
    <div class="container max-w-3xl flex flex-col w-full mx-auto">
      <nuxt-link to="/blog" class="container max-w-3xl mx-auto my-8">
        Go Back
      </nuxt-link>
      <div class="flex w-full justify-between items-center">
        <div>
          <h2 class="text-4xl font-bold mb-6">{{ article.title }}</h2>
        </div>
        <div class="flex">
          <p>{{ formatDate(article.createdAt) }}</p>
        </div>
      </div>
    </div>
    <article class="container max-w-3xl mx-auto">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
export default {
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
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 24px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 19px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
