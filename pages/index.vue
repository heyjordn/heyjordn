<template>
  <div class="flex flex-col items-center w-full">
    <navbar />
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
        <img src="~/assets/orbaone.png" alt="Orba One" class="h-20 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">Current Projects</p>
          <p>
            I currently work full-time as the lead engineer on Orba One and
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
        <img src="~/assets/open-source.png" alt="Orba One" class="h-20 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">Open Source</p>
          <p>
            I also do <b>a lot</b> of open source work, from the
            <a href="http://www.palisadoes.org/">Palisadoes Organisation</a>, to
            my own (sometime sporadic) side projects. More on those at my
            <a href="https://github.com/heyjordn">Github</a>.
          </p>
        </div>
      </div>
    </div>
    <footer class="max-w-md w-full py-4">
      <hr />
      <p class="text-gray-500 pt-6 text-center">
        © Copyright {{ new Date().getFullYear() }} Jordan Jones
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: {
    navbar: Navbar,
  },
})
</script>

<style>
a {
  color: #e8227e;
}
</style>
