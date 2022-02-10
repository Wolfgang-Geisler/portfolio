<template>
  <main>
    <div class="container my-8 px-4">
      <h1 class="text-primary">{{ page.title }}</h1>
    </div>
    <ContentRender v-if="page.content" :content="page.content" />
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
  async asyncData({ $axios, params }) {
    const slug = params.slug
    const pages = await $axios.$get(`/pages?slug=${slug}`)
    const page = pages[0]
    return { page }
  },
  head() {
    const { seo } = this.page
    console.log(this.page)
    const { defaultSeo } = this.global
    console.log(this.global)

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
