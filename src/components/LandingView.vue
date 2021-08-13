<template>
  <div class="landing-view">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-2 place-items-center justify-between h-[90vh]">
        <div class="text-center md:text-left">
          <div class="text-primary text-2xl font-bold">
            Welcome To
          </div>
          <div class="text-xl font-bolder mb-6">
            <br>
            <span class="text-6xl font-extrabold my-4">
              Debugger. <span class="text-3xl text-primary">tech</span>
            </span>
          </div>
          <div class="mb-6">
            Reliable website hosting, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs & 24 hours support.
          </div>
          <button class="bg-primary p-2.5 text-white rounded-lg">
            Get In Touch
          </button>
        </div>
        <div class="landing-image">
          <img src="~/assets/background-animation.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingView'
};
</script>

<style lang="scss" scoped>

</style>
