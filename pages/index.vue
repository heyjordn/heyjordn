<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex-auto text-center max-w-md mx-auto">
      <p class="text-4xl md:text-5xl font-bold">
        Jordan Jones
      </p>
      <p class="text-gray-600">
        Chief Technology Officer at
        <a
          class="text-gray-800"
          href="https://orba.io/"
          target="_blank"
          rel="noopener noreferrer"
          >Orba</a
        >
      </p>
      <hr class="my-6" />
      <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
        <img
          src="~/assets/stack.png"
          alt="Orba One"
          class="h-24 mr-0 md:mr-4"
        />
        <div class="text-center md:text-left">
          <p class="font-bold mb-3">Current Projects</p>
          <p>
            Currently building
            <a href="https://orba.io/" target="_blank" rel="noopener noreferrer"
              >Orba</a
            >,
            <a
              href="https://orbaone.com/"
              target="_blank"
              rel="noopener noreferrer"
              >Orba One</a
            >,
            <a
              href="https://zafe.app/"
              target="_blank"
              rel="noopener noreferrer"
              >Zafe</a
            >
            <a
              href="https://staffgenius.io/"
              target="_blank"
              rel="noopener noreferrer"
              >StaffGenius</a
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
        <img
          src="~/assets/open-source.png"
          alt="Orba One"
          class="h-24 mr-0 md:mr-4"
        />
        <div class="text-center md:text-left">
          <p class="font-bold mb-3">Open Source</p>
          <p>
            I publish tools, tutorials and side projects occassionally. More on
            those at my
            <a href="https://github.com/heyjordn">Github</a>.
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row my-6 md:my-4 items-center">
        <img
          src="~/assets/booking.png"
          alt="Orba One"
          class="h-24 mr-0 md:mr-4"
        />
        <div class="text-center md:text-left">
          <p class="font-bold mb-3">Consulting</p>
          <p>
            Choosing the <b>right</b> tech stack can be a real challenge. Feel
            free to schedule a consultation, I'm here to help.
            <nuxt-link to="/booking">Let's Talk</nuxt-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  head: {
    title: 'Home',
  },
})
</script>

<style>
a {
  color: #e8227e;
}
</style>
