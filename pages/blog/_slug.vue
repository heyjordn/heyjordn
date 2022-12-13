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
          <p>{{ formatDate(article.date) }}</p>
        </div>
      </div>
    </div>
    <article class="container max-w-3xl mx-auto">
      <nuxt-content :document="article" />
    </article>
    <div class="flex flex-col justify-center max-w-2xl mx-auto p-2 rounded">
      <div>
        <img
          class="h-16 my-3 mx-auto object-contain rounded-full border-white border-2"
          src="~/assets/profile.jpeg"
          alt="Jordan Jones"
        />
      </div>
      <p class="text-sm">
        Jordan Jones is a A Certified DevOps Engineer and a Kubernetes and Cloud
        Native Associate with extensive Software Engineering experience.
        Currently working at <span><a href="https://orba.io">Orba</a></span> on
        the <span><a href="https://metroipo.com">Metro</a></span> platform.
      </p>
    </div>
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
      return new Date(date).toLocaleString('en', options)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'heyjordn.com',
        },
        // {
        //   name: 'description',
        //   property: 'og:description',
        //   content: this.article.description,
        // },
        // {
        //   name: 'og:description',
        //   content: this.article.description,
        // },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          itemprop: 'image',
          content: this.article.ogImage,
        },
        {
          name: 'og:url',
          content: `https://heyjordn.com/blog/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.ogImage,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Jordan Jones' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://heyjordn.com/blog/${this.$route.params.slug}`,
        },
      ],
    }
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
