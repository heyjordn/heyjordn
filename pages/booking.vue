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
      id="calendly-booking"
      class="flex-auto h-full"
      style="min-width: 320px; height: 750px;"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    // @ts-ignore
    const Calendly = window.Calendly
    if (Calendly) {
      Calendly.initInlineWidget({
        url:
          'https://calendly.com/heyjordn?hide_landing_page_details=1&hide_gdpr_banner=1',
        parentElement: document.getElementById('calendly-booking'),
        prefill: {},
        utm: {},
      })
    }
  },
})
</script>

<style></style>
