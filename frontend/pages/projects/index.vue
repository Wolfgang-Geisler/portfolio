<template>
  <main>
    <template v-for="section in page.content">
      <About
        v-if="section.__component === 'content.formatted-text'"
        :key="section.id"
        :text="section.text"
        :image="section.image"
      />
      <Hero
        v-if="section.__component === 'content.hero'"
        :key="section.id"
        :intro="section.intro"
        :image="section.image"
        :call-to-action-text="section.callToActionText"
        :call-to-action-url="section.callToActionUrl"
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
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'
export default {
  async asyncData({ $axios }) {
    const pages = await $axios.$get(`/pages?slug=portfolio`)
    const page = pages[0]
    return { page }
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
