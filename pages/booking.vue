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
    <div id="booking-page"></div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  components: {},
  mounted() {
    window.SavvyCal('inline', {
      link: 'heyjordn/chat',
      selector: '#booking-page',
    })
  },
  head: {
    title: "Let's Talk! - Book a consultation today.",
  },
})
</script>
<style>
#booking-page {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
