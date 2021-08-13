<template>
  <div class="grid place-items-center min-h-[100vh]">
    <ServiceCard />
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard';
export default {
  name: 'Services',
  components: {
    ServiceCard
  }
};
</script>
