<template>
  <main>
    <template v-for="section in content">
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
      <Contact
        v-if="section.__component === 'content.contact'"
        :key="section.id"
        :request="section.request"
        :mail="section.mail"
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
import Technology from '../components/Technology.vue'
import Contact from '../components/Contact.vue'

export default {
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
  components: {
    Hero,
    ProjectsList,
    MyGoals,
    FormattedText,
    TextPicture,
    ContentBlob,
    Technology,
    Contact,
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
