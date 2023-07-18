<template>
  <div>
    <div class="flex flex-col sm:flex-row my-6 md:my-4">
      <div class="text-left">
        <h1 class="font-bold text-5xl mt-10 mb-5 font-display">Hey There 👋</h1>
        <p class="mb-3">
          I'm Jordan, A Certified DevOps Engineer and a Kubernetes and Cloud
          Native Associate with extensive Software Engineering experience based
          in Kingston, Jamaica. Currently working at Orba on the Metro platform.
          I have over 9 years of professionally developing and deploying
          platforms for companies in North America and the wider Caribbean.
        </p>
        <h2 class="font-bold mt-10 mb-3 text-3xl font-display">Work 💻</h2>
        <div class="grid grid-cols-1 gap-8">
          <card
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            :body="card.body"
            :image="card.image"
            :link="card.link"
            :tags="card.tags"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
      <div class="text-left">
        <h6 class="font-bold mt-10 mb-5 text-3xl font-display">
          Open Source 🌐
        </h6>
        <p class="mb-3">
          I experiment and publish tools and example repos for whatever I'm
          working on over at my
          <a href="https://github.com/heyjordn">Github</a>. I find the best way
          to learn is to reduce complexity and get my hands dirty.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <badge
            v-for="(repository, index) in repositories"
            :key="index"
            :url="repository.url"
            :name="repository.name"
            :description="repository.description"
            :stars="repository.stargazers"
            :forks="repository.forks"
            :language="repository.primaryLanguage"
          ></badge>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
      <div class="text-left">
        <h6 class="font-bold mt-10 mb-5 text-3xl font-display">Certs 📜</h6>
        <p>
          Love cloud native tech (Kubernetes, Terraform, Ansible, Jenkins,
          CircleCI) and architecting new solutions and system designs, this lead
          me to persue a couple of certifications.
        </p>
        <div class="flex mt-4">
          <a
            href="https://www.credly.com/badges/0d965b71-31fd-452d-9544-6b495d16fde0/linked_in?t=rcrcx4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="h-32 mr-4" src="~/assets/kcna.svg" alt="KCNA" />
          </a>
          <a
            href="https://www.credly.com/badges/8500304b-30fa-43b0-9bc3-8078fbf3e8eb/linked_in?t=rbttzu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="h-32" src="~/assets/lfs250.svg" alt="LFS250" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $http }) {
    const repositories = await $http.$get(`https://github.heyjordn.com`)
    return { repositories }
  },
  data() {
    return {
      cards: [
        {
          link: 'https://voltauto.io',
          title: 'Volt Auto',
          image: 'https://heyjordn.com/volt.png',
          body: 'A peer to peer Motor Vehicle marketplace faciliting advertising,buying, selling and trading.',
          tags: ['#vue', '#laravel', '#filament'],
        },
        {
          link: 'https://metroipo.com',
          title: 'Metro IPO',
          image: 'https://heyjordn.com/metro.png',
          body: 'An IPO underwriting and Private Equity platform designed to interface with the Jamaican Stock Exchange.',
          tags: ['#vue', '#laravel', '#livewire'],
        },
        {
          link: 'https://orba.io/',
          title: 'Orba',
          image: 'https://heyjordn.com/orba.png',
          body: 'A Nuxt 2 static website redesign built for Orba Technology Holdings, a software development agency.',
          tags: ['#nuxt', '#nuxt2', '#vue2'],
        },
        {
          link: 'https://orbaone.com/',
          title: 'Orba One',
          image: 'https://heyjordn.com/orbaone.png',
          body: 'An identity verification and KYC platform, using machine learning for facial recognition, hosted on AWS.',
          tags: ['#vue', '#vuex', '#spa'],
        },
        {
          link: 'https://zafe.app/',
          title: 'Zafe',
          image: 'https://heyjordn.com/zafe.png',
          body: 'A salary advance platform that reduces friction for employee loans and administrative overhead',
          tags: ['#vue', '#laravel', '#inertia'],
        },
        {
          link: 'https://staffgenius.io/',
          title: 'StaffGenius',
          image: 'https://heyjordn.com/staffgenius.png',
          body: 'A remote workforce management suite of tools, geared towards time tracking of caribbean workforces.',
          tags: ['#vue', '#laravel', '#api'],
        },
      ],
    }
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
