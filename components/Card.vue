<template>
  <a
    :href="link"
    class="no-underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-white my-2"
    >
      <img class="w-full" :src="image" :alt="title" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-gray-800 font-display">
          {{ title }}
        </div>
        <p class="text-gray-700 text-base">
          {{ body }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: 'https://heyjordn.com',
    },
    image: {
      type: String,
      default: 'https://v1.tailwindcss.com/img/card-top.jpg',
    },
    title: {
      type: String,
      default: 'Sample Title',
    },
    body: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    },
    tags: {
      type: Array,
      default() {
        return ['vue', 'laravel', 'nuxt']
      },
    },
  },
}
</script>
