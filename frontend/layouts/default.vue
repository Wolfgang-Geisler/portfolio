<template>
  <div>
    <header>
      <Navigation />
    </header>
      <Nuxt />
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<script>
import Navigation from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Navigation, Footer },
}
</script>
