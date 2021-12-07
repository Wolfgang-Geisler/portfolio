<template>
  <main>
    <template v-for="section in home.content">
      <Hero
        v-if="section._component === 'content.hero'"
        :key="section.id"
        :intro="section.intro"
        :image="section.image"
        :callToAction="section.callToActionUrl"
      />
      <ProjectsList
        v-if="section._component === 'content.projects-list'"
        :key="section.id"
        :title="section.title"
        :projects="section.projects"
      />
      <MeineZiele
        v-if="section._component === 'content.meine-ziele'"
        :key="section.id"
        :title="section.title"
        :text="section.text"
      />
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMetaTags } from '../utils/seo'
import { getStrapiMedia } from '../utils/medias'
import Hero from '../components/Hero.vue'
import ProjectsList from '../components/ProjectsList.vue'
import meineZiele from '../components/meineZiele.vue'

export default {
  async asyncData({ $axios }) {
    const home = await $axios.$get('/pages?slug=home')
    return { home: home[0] }
  },
  head() {
    const { seo } = this.home
    const { defaultSeo } = this.global

    const fullSeo = {
      ...defaultSeo,
      ...seo,
    }
    return {
      titleTemplate: `%s`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
    }
  },
  computed: {
    ...mapGetters(['global']),
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
