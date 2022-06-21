<template>
  <div class="flex flex-col w-full">
    <div class="flex-auto max-w-3xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold">
        Hi There! 👋
      </h2>
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
      <div class="flex flex-col sm:flex-row my-6 md:my-4">
        <div class="text-left">
          <h6 class="font-bold mb-3">Projects 💻</h6>
          <ul>
            <li>
              <a
                href="https://metroipo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                metroipo.com
              </a>
              <span>
                - A Initial Public Offer (IPO) underwriting platform designed to
                interface with the Jamaican Stock Exchange.
              </span>
            </li>
            <li>
              <a
                href="https://orbaone.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                orbaone.com
              </a>
              <span>
                - An identity verification platform, using machine learning for
                facial recognition.
              </span>
            </li>
            <li>
              <a
                href="https://zafe.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                zafe.app
              </a>
              <span>
                - A salary advance platform that reduces friction for employee
                loans and administrative overhead.
              </span>
            </li>
            <li>
              <a
                href="https://staffgenius.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                staffgenius.io
              </a>
              <span>
                - A remote workforce management suite of tools.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
        <div class="text-left">
          <h6 class="font-bold mb-3">Open Source 🌐</h6>
          <p>
            I experiment and publish tools and example repos for whatever I'm
            working on over at my
            <a href="https://github.com/heyjordn">Github</a>. I find the best
            way to learn is to reduce complexity and get my hands dirty.
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
        <div class="text-left">
          <h6 class="font-bold mb-3">Certs 📜</h6>
          <p>
            Love cloud native tech (Kubernetes, Terraform, Ansible, Jenkins,
            CircleCI) and architecting new solutions and system designs, this
            lead me to persue a couple of certifications.
          </p>
          <ul>
            <li>
              <a
                href="https://www.credly.com/badges/0d965b71-31fd-452d-9544-6b495d16fde0/linked_in?t=rcrcx4"
                >Jordan Jones - KCNA</a
              >
            </li>
            <li>
              <a
                href="https://www.credly.com/badges/8500304b-30fa-43b0-9bc3-8078fbf3e8eb/linked_in?t=rbttzu"
                >Jordan Jones - LFS250</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
        <div class="text-left">
          <h6 class="font-bold mb-3">Consulting 🤝</h6>
          <p>
            Choosing the <b>right</b> tech stack can be a real challenge. Feel
            free to schedule a consultation, I'm here to help.
            <nuxt-link to="/booking">Let's Talk</nuxt-link>.
          </p>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container max-w-3xl mx-auto">
        <h2 class="text-2xl font-semibold my-8">
          Latest Posts 📖.
        </h2>
        <ul>
          <li v-for="article of articles" :key="article.slug" class="my-3">
            <div class="flex w-full justify-between">
              <nuxt-link
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                <h2 class="text-lg font-medium">{{ article.title }}</h2>
              </nuxt-link>
              <p class="text-sm text-gray-700">
                {{ formatDate(article.createdAt) }}
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
        'readTime',
      ])
      .sortBy('createdAt', 'asc')
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
  head: {
    title: 'Jordan Jones - Senior Software Engineer, Kingston Jamaica',
  },
})
</script>
