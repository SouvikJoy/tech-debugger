<template>
  <nav class="container mx-auto py-2.5">
    <div class="flex place-items-center justify-between">
      <NuxtLink :to="{ name: 'index' }">
        <img src="~/assets/gradient.png" alt="" :style="{ width: '300px' }">
      </NuxtLink>
      <div>
        <NuxtLink v-for="(link, index) in links" :key="index" :to=" { name: link.to } " class="p-2.5 hover:border-b-primary hover:border-b-2">
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
    links: [
      {
        name: 'Services',
        to: 'services'
      },
      {
        name: 'Portfolio',
        to: 'portfolio'
      },
      {
        name: 'Technologies',
        to: 'technologies'
      },
      {
        name: 'Career',
        to: 'career'
      },
      {
        name: 'About us',
        to: 'about'
      },
      {
        name: 'Contact us',
        to: 'contact'
      }
    ]
  })
};
</script>

<style lang="scss">

</style>
