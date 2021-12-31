<template>
  <div class="meineZiele-container my-8 px-4">
    <div class="meineZiele-title text-light flex justify-center mb-4">
      <h2>{{ title }}</h2>
    </div>
    <p v-if="text" class="meineZiele-content" v-html="$md.render(text)">{{ text }}</p>
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
