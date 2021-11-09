<template>
  <div>
    <h1>{{page.title}}</h1>
    <p>{{page}}</p>
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'
export default {
  async asyncData({ $axios, params }) {
    const slug = params.slug
    const pages = await $axios.$get(`/pages?slug=${slug}`)
    const page = pages[0]
    return { page }
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
