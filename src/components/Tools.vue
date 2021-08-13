<template>
  <div class="container mx-auto my-10">
    <div class="text-center text-4xl font-extrabold my-10">
      How We Work
    </div>
    <div class="mx-20 text-center mb-6">
      We believe that we are the best web hosting provider because we provide
      high quality hosting services, cPanel and other panel. We have experience support
      staff's who is ready to help you for 24 hours.
      You can choose the hosting plan of your choice at a very cheap price.
    </div>
    <div class="tool grid grid-cols-2 place-items-center justify-between gap-10">
      <div v-for="(tool, index) in tools" :key="index" class="border-2 border-transparent rounded-3xl p-5 bg-[#f6f6f6] shadow">
        <div class="grid grid-cols-2 place-items-center justify-between">
          <div class="tools-top-left">
            <div class="service-policy">
              {{ tool.policy }}
            </div>
            <div class="text-2xl font-extrabold my-10">
              {{ tool.name }}
            </div>
          </div>
          <div class="service-image">
            <img :src="tool.image" alt="">
          </div>
        </div>
        <div class="service-desc">
          {{ tool.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data: () => ({
    tools: [
      {
        name: 'Website Building',
        policy: 'EASY & FIRST',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Managed WordPress',
        policy: 'SUITABLE FOR ALL USERS',
        image: require('~/assets/hosting.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Dedicated Support',
        policy: 'COMMITMENT TO',
        image: require('~/assets/virtual.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Website Transfer',
        policy: 'EASY & SMOOTH',
        image: require('~/assets/reseller.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      }
    ]
  })
};
</script>

<style lang="scss">

</style>
