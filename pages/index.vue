<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex w-full pt-2 items-center">
      <div class="w-1/5 md:w-1/2 align-left">
        <Logo />
      </div>
      <div class="w-4/5 md:w-1/2 text-right">
        <a class="mr-4" href="https://twitter.com/jord_njones">Twitter</a>
        <a class="mr-4" href="https://github.com/heyjordn">Github</a>
        <a class="mr-4" href="https://www.linkedin.com/in/heyjordn/"
          >LinkedIn</a
        >
      </div>
    </div>
    <div class="flex-auto text-center max-w-md mx-auto">
      <p class="text-4xl md:text-5xl font-bold">
        Jordan Jones
      </p>
      <p class="text-gray-600">
        Product Design Engineer at
        <a class="text-gray-800" href="https://orbaone.com/">Orba</a> working on
        <a href="https://orbaone.com/">Orba One</a>.
      </p>
      <hr class="my-6" />
      <div class="flex my-4 items-center">
        <img src="~/assets/orbaone.png" alt="Orba One" class="h-20 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">Current Projects</p>
          <p>
            I currently work full-time as the lead product design engineer on
            Orba One and StaffGenius. More on that over at
            <a href="https://orbaone.com">orbaone.com</a>
            <a href="https://staffgenius.io">staffgenius.io</a>.
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
      <div class="flex my-4 items-center">
        <img src="~/assets/merch.png" alt="Orba One" class="h-20 mr-4" />
        <div class="text-left">
          <p class="font-bold mb-3">
            Merch <a class="text-sm" href="">new!</a>
          </p>
          <p>
            Merch! You can now purchase some t-shirts, tank tops and accessories
            I designed. Head over to my lil
            <a href="https://teespring.com/stores/anaglyph">store</a> on
            TeeSpring to get your super cool merch today!
          </p>
        </div>
      </div>
    </div>
    <footer class="max-w-md w-full py-4">
      <hr />
      <p class="text-gray-500 pt-6">
        © Copyright {{ new Date().getFullYear() }} Jordan Jones
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
a {
  color: #e8227e;
}
</style>
