<template>
  <div class="w-full">
    <div class="container max-w-3xl mx-auto">
      <h1 class="text-xl font-display font-bold my-8">Latest posts 📖.</h1>
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
      .sortBy('article', 'desc')
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
  head() {
    return {
      title: 'Certified DevOps Engineer',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Certified DevOps Engineer',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'heyjordn.com',
        },
        {
          name: 'description',
          property: 'description',
          content:
            "I'm Jordan, a A Certified DevOps Engineer and a Kubernetes and Cloud Native Associate with extensive Software Engineering experience.",
        },
        {
          name: 'og:description',
          property: 'og:description',
          content:
            "I'm Jordan, a Certified DevOps Engineer and a Kubernetes and Cloud Native Associate with extensive Software Engineering experience.",
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          itemprop: 'image',
          content: 'https://og.heyjordn.com/api/og',
        },
        {
          name: 'og:url',
          content: `https://heyjordn.com/`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://og.heyjordn.com/api/og',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
