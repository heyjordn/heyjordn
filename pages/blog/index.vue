<template>
  <div class="w-full">
    <div class="container max-w-3xl mx-auto">
      <h1 class="text-4xl font-semibold my-8">Latest posts 📖.</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug" class="mb-8">
          <div class="flex w-full justify-between">
            <nuxt-link
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              <h2 class="text-lg font-medium">{{ article.title }}</h2>
            </nuxt-link>
            <p class="text-sm text-gray-700">
              {{ formatDate(article.date) }}
            </p>
          </div>
          <img :src="article.img" />
          <div>
            <p>{{ article.description }}</p>
          </div>
          <div class="flex justify-between mt-3">
            <div class="flex items-center">
              <p class="text-xs mr-3">Author: Jordan Jones</p>
              <p class="text-gray-600 text-xs">{{ article.readTime }}</p>
            </div>

            <nuxt-link
              class="text-sm underline"
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >
              Read more
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'date',
        'createdAt',
        'readTime',
      ])
      .sortBy('date', 'asc')
      .fetch()

    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en', options)
    },
  },
}
</script>
