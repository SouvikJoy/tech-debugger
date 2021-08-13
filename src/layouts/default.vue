<template>
  <div id="App">
    <header>
      <Header />
    </header>
    <main>
      <Nuxt :key="$route.fullPath" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';
export default {
  components: { Footer, Header }
};
</script>
