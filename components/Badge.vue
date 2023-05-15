<template>
  <div
    class="flex items-center p-2 bg-white rounded-t lg:rounded-t-none lg:rounded-l border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-r"
  >
    <a
      :href="url"
      class="no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="h-8 mr-3 text-center"
        src="https://cdn.svgporn.com/logos/github-icon.svg"
        title="Mountain"
      />
      <div class="flex flex-col justify-between leading-normal">
        <div>
          <div class="text-gray-900 font-bold text-md mb-1">
            {{ name }}
          </div>
          <p class="text-gray-700 text-base">
            {{ description }}
          </p>
        </div>
        <div class="flex items-center">
          <div v-if="language" class="flex justify-center mr-3">
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
              <circle cx="10" cy="10" r="5" :fill="language.color"></circle>
            </svg>
            <p class="text-sm ml-1">{{ language.name }}</p>
          </div>
          <p class="mr-1">{{ stars }}</p>
          <svg
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            class="mr-2"
          >
            <path
              d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
            ></path>
          </svg>
          <p class="ml-1">{{ forks }}</p>
          <svg
            role="img"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
          >
            <path
              d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: 'https://github.com/heyjordn',
    },
    name: {
      type: String,
      default: 'Example',
    },
    description: {
      type: String,
      default: 'This is an example of a repository',
    },
    stars: {
      type: Number,
      default: 0,
    },
    forks: {
      type: Number,
      default: 0,
    },
    language: {
      type: Object,
      default() {
        return {
          name: 'JavaScript',
          color: '#000',
        }
      },
    },
  },
}
</script>
