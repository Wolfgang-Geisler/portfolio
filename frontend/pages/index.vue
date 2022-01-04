<template>
  <main>
    <template v-for="section in home.content">
      <Hero
        v-if="section.__component === 'content.hero'"
        :key="section.id"
        :intro="section.intro"
        :image="section.image"
        :call-to-action-text="section.callToActionText"
        :call-to-action-url="section.callToActionUrl"
      />
      <ProjectsList
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
      <FormattedText
        v-if="section.__component === 'content.formatted-text'"
        :key="section.id"
        :title="section.title"
        :text="section.text"
      />
      <TextPicture
        v-if="section.__component === 'content.text-photo'"
        :key="section.id"
        :text="section.text"
        :image="section.image"
      />
      <ContentBlob
        v-if="section.__component === 'content.content-blob'"
        :key="section.id"
        :content1="section.content1"
        :content2="section.content2"
        :quote="section.quote"
      />
      <Technology
        v-if="section.__component === 'content.technology-list'"
        :key="section.id"
        :technologies="section.technologies"
        :name="section.name"
        :type="section.type"
        :icon="section.icon"
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
import MyGoals from '../components/MyGoals.vue'
import FormattedText from '../components/FormattedText.vue'
import TextPicture from '../components/TextPicture.vue'
import ContentBlob from '../components/ContentBlob.vue'
import Technology from '../components/Technology.vue'

export default {
  components: {
    Hero,
    ProjectsList,
    MyGoals,
    FormattedText,
    TextPicture,
    ContentBlob,
    Technology,
  },
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
