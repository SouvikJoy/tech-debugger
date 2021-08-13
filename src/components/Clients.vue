<template>
  <div class="container mx-auto my-10">
    <div class="text-center text-4xl font-extrabold my-10">
      A Glimpse of Our Valuable Clients
    </div>
    <div class="mx-20 text-center mb-6">
      A Glimpse of our valuable clients takes a look at our clients at a glance.
      They are our reliable consumers & we are their loyal hosting provider. We are working hand in hand with each other.
    </div>
    <div class="grid grid-cols-6 place-items-center justify-between">
      <div v-for="(item, index) in 6" :key="index">
        <img
          src="~/assets/pricing-2.png"
          alt=""
          in
          6
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients'
};
</script>

<style scoped>

</style>
