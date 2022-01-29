<template>
  <main>
    <ContentRender v-if="home.content" :content="home.content" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { getMetaTags } from '../utils/seo'
import ContentRender from '../components/ContentRender.vue'

export default {
  components: {
    ContentRender,
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
}
</script>
