<template>
  <div class="flex flex-col w-full">
    <div class="flex-auto max-w-3xl mx-auto">
      <div class="flex flex-col-reverse md:flex-row mt-5">
        <div class="w-full md:w-3/5">
          <h2 class="text-4xl md:text-5xl font-bold">Hey 👋</h2>
          <p>
            I'm Jordan, a DevOps Engineer at
            <a href="https://orba.io/" target="_blank" rel="noopener noreferrer"
              >Orba</a
            >
            automating builds and tests for the
            <a
              href="https://metroipo.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Metro</a
            >
            platform.
          </p>
        </div>
        <div class="flex w-full md:w-2/5 justify-center md:justify-end">
          <img
            class="h-40 object-contain rounded-full border-white border-2"
            src="~/assets/profile.jpeg"
            alt="Jordan Jones"
          />
        </div>
      </div>
      <div class="w-full">
        <div class="container max-w-3xl mx-auto">
          <h2 class="text-2xl font-semibold my-8">Latest Posts 📖.</h2>
          <ul>
            <li v-for="article of articles" :key="article.slug" class="my-3">
              <div class="flex w-full justify-between">
                <nuxt-link
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                >
                  <h2 class="text-lg font-medium">{{ article.title }}</h2>
                </nuxt-link>
                <p class="text-sm text-gray-700">
                  {{ article.date }}
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
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only([
        'title',
        'description',
        'img',
        'slug',
        'author',
        'createdAt',
        'date',
        'readTime',
      ])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: "Jordan Jones - Senior Software Engineer",
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Jordan Jones - Senior Software Engineer",
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'heyjordn.com',
        },
        {
          name: 'description',
          content: "Jordan Jones is a A Certified DevOps Engineer and a Kubernetes and Cloud Native Associate with extensive Software Engineering experience.",
        },
        {
          name: 'og:description',
          content: "Jordan Jones is a A Certified DevOps Engineer and a Kubernetes and Cloud Native Associate with extensive Software Engineering experience.",
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          itemprop: 'image',
          content: "https://og.heyjordn.com/Hi%20There%20%F0%9F%91%8B.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fheyjordn.com%2Ffavicon-light.png",
        },
        {
          name: 'og:url',
          content: `https://heyjordn.com/`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: "https://og.heyjordn.com/Hi%20There%20%F0%9F%91%8B.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fheyjordn.com%2Ffavicon-light.png",
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
})
</script>
