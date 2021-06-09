<template>
  <div class="flex flex-col text-center">
    <div class="my-3 max-w-md mx-auto">
      <p class="text-4xl md:text-3xl font-bold">
        Let's Talk
      </p>
      <hr class="my-6" />
      <p class="text-gray-600">
        Choosing the <b>right</b> tech stack can be a real challenge. Feel free
        to schedule a consultation, I'm here to help.
      </p>
    </div>

    <div
      class="calendly-inline-widget flex-auto h-full"
      data-url="https://calendly.com/heyjordn"
      style="min-width: 320px; height: 750px;"
    ></div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style></style>
