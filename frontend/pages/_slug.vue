<template>
  <div>
    <h1>Pages</h1>
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'
export default {
  async asyncData({ $axios, params }) {
    const slug = params.slug
    const pages = await $axios.$get(`/pages?slug=${slug}`)
    return { pages }
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
