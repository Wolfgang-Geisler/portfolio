<template>
  <app>
    <Navigation />
    <main>
      <Nuxt />
    </main>
  </app>
</template>
<script>
import Navigation from '../components/Nav.vue'
export default {
  components: { Navigation },
}
</script>
