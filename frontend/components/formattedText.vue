<template>
  <div class="formatted-container my-8 px-4">
    <p v-if="text" v-html="$md.render(text)">{{ text }}</p>
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
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
