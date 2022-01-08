<template>
  <main>
    <template>
      <div class="container my-8 px-4">
        <h1 class="text-primary">{{ page.title }}</h1>
      </div>
      <ContentRender v-if="page.content" :content="page.content" />
    </template>
  </main>
</template>
<script>
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
}
</script>
