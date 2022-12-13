export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'Jordan Jones | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Senior Software Engineer from Kingston, Jamaica',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/calendly.js', mode: 'client' },
    { src: '@/plugins/savvycal.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // [
    //   'nuxt-social-meta',
    //   {
    //     url: 'https://heyjordn.com',
    //     title: 'Jordan Jones - Senior Software Engineer',
    //     site_name: 'Jordan Jones - Senior Software Engineer',
    //     description: `Jordan Jones is a A Certified DevOps Engineer and a Kubernetes and Cloud
    //     Native Associate with extensive Software Engineering experience.`,
    //     img: 'https://heyjordn.com/site-image.png',
    //     img_size: { width: '1080px', height: '1080px' },
    //     locale: 'en_US',
    //     twitter: '@heyjordn',
    //     twitter_card: 'summary_large_image',
    //     themeColor: '#17181a',
    //   },
    // ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
