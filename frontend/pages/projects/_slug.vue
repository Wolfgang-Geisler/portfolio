<template>
  <main>
    <div class="py-16 px-4 bg-primary my-8">
        <div class="text-light mb-4">{{ project.title }}</div>
        <div class="text-white" v-html="$md.render(project.content)">
          {{ project.content }}
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
