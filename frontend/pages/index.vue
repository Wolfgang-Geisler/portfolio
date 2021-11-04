<template>
  <div>
    <h1>home</h1>
    {{ home }}
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'
export default {
  async asyncData({ $axios }) {
    const home = await $axios.$get('/pages?slug=home')
    return { home: home[0] }
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
