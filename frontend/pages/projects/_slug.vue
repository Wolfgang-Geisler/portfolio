<template>
  <main>
    <div class="class container">
      <div>
        <h1>{{ project.title }}</h1>
        <p>{{ project.content }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'
export default {
  async asyncData({ $axios, params }) {
    const slug = params.slug
    const projects = await $axios.$get(`/projects?slug=${slug}`)
    const project = projects[0]
    return { project }
  },
  methods: {
    getStrapiMedia,
  },
}
</script>

<style></style>
