<template>
  <div class="pb-6 mb-10">
    <div class="container mx-auto">
      <div>
        <div class="text-center text-4xl font-extrabold my-10">
          OUR SERVICES
        </div>
        <div class="mx-20 text-center mb-6">
          We offer a wide array of services of your Web and Mobile (Android and iOS) Applications with a prime focus on helping businesses succeed by
          utilizing functional and innovative design solutions and thereby making your online presence effective and powerful. All these services you will have under one shade.
        </div>
      </div>
      <div class="service grid grid-cols-3 place-items-center gap-6">
        <div v-for="(service, index) in services" :key="index" class="border-1 rounded-br-3xl rounded-tl-3xl p-6 h-[450px] bg-[#f6f6f6] border-transparent shadow">
          <div>
            <img :src="service.image" alt="" class="mx-auto">
          </div>
          <div class="text-center text-2xl font-extrabold mb-4">
            {{ service.name }}
          </div>
          <div class="text-center text-xs">
            {{ service.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  data: () => ({
    services: [
      {
        name: 'Website Development',
        image: require('~/assets/pricing-1.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Mobile App Development',
        image: require('~/assets/hosting.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'E-commerce Web Development',
        image: require('~/assets/reseller.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Backend Development',
        image: require('~/assets/virtual.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'UI-UX Design',
        image: require('~/assets/reseller.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      },
      {
        name: 'Long Term Maintenance & Support Service',
        image: require('~/assets/hosting.png'),
        description: 'Ensuring the best possible defense against the most dangerous network attacks. The web hosting management experts help to solve your problem and other facts that you need to get.'
      }
    ]
  })
};
</script>

<style lang="scss">

</style>
