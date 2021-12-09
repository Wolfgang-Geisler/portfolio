<template>
  <div>
    <main>
      <template v-for="section in pages.content">
        <About
          v-if="section.__component === 'content.formatted-text'"
          :key="section.id"
          :text="section.text"
          :image="section.image"
        />
        <Portfolio
          v-if="section.__component === 'content.projects-list'"
          :key="section.id"
          :title="section.title"
          :projects="section.projects"
        />
        <!-- <Contact
        v-if="section.__component === ''"
      /> -->
        <Datenschutz
          v-if="section.__component === 'content.formatted-text'"
          :key="section.id"
          :title="section.title"
          :text="section.text"
        />
        <Impressum
          v-if="section.__component === 'content.formatted-text'"
          :key="section.id"
          :title="section.title"
          :text="section.text"
        />
      </template>
    </main>
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
