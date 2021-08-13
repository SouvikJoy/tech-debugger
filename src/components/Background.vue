<template>
  <div class="anima">
    <div>
      <img src="~/assets/bg-bg-bubble.svg" alt="" class="bg-bubble">
      <img src="~/assets/bg-bg-bubble.svg" alt="" class="bg-bubble-2">
      <img src="~/assets/small-bubble-1.svg" alt="" class="small-bubble-1">
      <img src="~/assets/small-bubble-2.svg" alt="" class="small-bubble-2">
      <img src="~/assets/small-bubble-3.svg" alt="" class="small-bubble-3">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Background'
};
</script>

<style lang="scss">
.bg-bubble {
  position: absolute;
  left: 45.96%;
  right: 9.24%;
  top: 15.96%;
  bottom: 12.1%;
  width: 1220px;
  z-index: 2;
}
.bg-bubble-2 {
  position: absolute;
  left: -250px;
  right: 9.24%;
  top: 75.96%;
  bottom: 12.1%;
  z-index: 1;
}
.small-bubble-1 {
  position: absolute;
  left: 50.94%;
  right: 70.89%;
  top: 73.35%;
  bottom: 39.33%;
  width: 10%;
}
.small-bubble-2 {
  position: absolute;
  left: 80.66%;
  right: 25.87%;
  top: 1.18%;
  bottom: 83.07%;
  width: 16%
}
.small-bubble-3 {
  position: absolute;
  left: 44.58%;
  right: 60.37%;
  top: 8.03%;
  bottom: 78.88%;
  width: 6%;
}
</style>
