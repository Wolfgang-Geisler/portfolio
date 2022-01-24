<template>
  <main>
    <template v-for="section in page.content">
      <Hero
        v-if="section.__component === 'content.hero'"
        :key="section.id"
        :intro="section.intro"
        :image="section.image"
        :call-to-action-text="section.callToActionText"
        :call-to-action-url="section.callToActionUrl"
      />
      <Projects-List
        v-if="section.__component === 'content.projects-list'"
        :key="section.id"
        :title="section.title"
        :projects="section.projects"
        :call-to-action-text="section.callToActionText"
        :call-to-action-text2="section.callToActionText2"
        :call-to-action-url="section.callToActionUrl"
      />
      <MyGoals
        v-if="section.__component === 'content.meine-ziele'"
        :key="section.id"
        :title="section.title"
        :text="section.text"
      />
      <Formatted-Text
        v-if="section.__component === 'content.formatted-text'"
        :key="section.id"
        :title="section.title"
        :text="section.text"
      />
      <Media
        v-if="section.__component === 'content.media'"
        :key="section.id"
        :image="section.image"
      />
    </template>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMetaTags } from '../../utils/seo'
import { getStrapiMedia } from '../../utils/medias'
import Hero from '../../components/Hero.vue'
import ProjectsList from '../../components/ProjectsList.vue'
import MyGoals from '../../components/MyGoals.vue'

export default {
  components: {
    Hero,
    ProjectsList,
    MyGoals,
  },
  async asyncData({ $axios }) {
    const pages = await $axios.$get(`/pages?slug=portfolio`)
    const page = pages[0]
    return { page }
  },
  head() {
    const { seo } = this.page
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
