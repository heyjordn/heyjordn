<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex-auto text-center max-w-md mx-auto">
      <p class="text-4xl md:text-5xl font-bold">
        Jordan Jones
      </p>
      <p class="text-gray-600">
        Senior Software Engineer at
        <a class="text-gray-800" href="https://orbaone.com/">Orba</a> working on
        <a href="https://orbaone.com/">Orba One</a>.
      </p>
      <hr class="my-6" />
      <div class="flex my-4 items-center">
        <img src="~/assets/stack.png" alt="Orba One" class="h-24 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">Current Projects</p>
          <p>
            Currently working full-time as the lead engineer on Orba One and
            StaffGenius.
          </p>
          <p class="mt-2">
            More at
            <a href="https://orbaone.com">orbaone.com</a> and
            <a class="inline" href="https://staffgenius.io">staffgenius.io</a>.
          </p>
        </div>
      </div>
      <div class="flex my-4 items-center">
        <img src="~/assets/open-source.png" alt="Orba One" class="h-24 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">Open Source</p>
          <p>
            I publish tools, tutorials and side projects occassionally. More on
            those at my
            <a href="https://github.com/heyjordn">Github</a>.
          </p>
        </div>
      </div>
      <div class="flex my-4 items-center">
        <img src="~/assets/booking.png" alt="Orba One" class="h-24 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">Consulting</p>
          <p>
            Choosing the <b>right</b> tech stack can be a real challenge. Feel
            free to schedule a consultation, I'm heare to help.
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
})
</script>

<style>
a {
  color: #e8227e;
}
</style>
