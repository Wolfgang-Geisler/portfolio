<template>
  <div class="media-container my-8 px-4">
    <div class="media-image">
      <img
        v-if="image"
        :src="getStrapiMedia(image.formats.small.url)"
        alt="mein foto"
      />
    </div>
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
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
