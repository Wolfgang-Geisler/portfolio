<template>
  <div class="textImage-container my-8 px-4">
    <div v-if="text" class="textImage-content">{{ text }}</div>
    <div>
      <img v-if="image" :src="getStrapiMedia(image.formats.small.url)" :alt="image.name"/>
    </div>
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
    image: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
