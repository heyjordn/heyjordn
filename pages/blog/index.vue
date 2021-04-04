<template>
  <div class="w-full">
    <navbar />
    <div class="container max-w-3xl mx-auto">
      <h1 class="text-2xl font-semibold">Hey There!</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug" class="my-3">
          <nuxt-link
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <h2 class="text-lg font-medium">{{ article.title }}</h2>
          </nuxt-link>
          <img :src="article.img" />
          <div>
            <p>{{ article.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    navbar: Navbar,
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
