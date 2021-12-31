<template>
  <main>
    <div class="container">
      <h1 class="text-primary">{{ page.title }}</h1>
    </div>
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
    </template>
  </main>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'
import Hero from '../components/Hero.vue'
import ProjectsList from '../components/ProjectsList.vue'
import MyGoals from '../components/MyGoals.vue'
import FormattedText from '../components/FormattedText.vue'
import TextPicture from '../components/TextPicture.vue'
import ContentBlob from '../components/ContentBlob.vue'
export default {
  components: {
    Hero,
    ProjectsList,
    MyGoals,
    FormattedText,
    TextPicture,
    ContentBlob,
  },
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
