<template>
  <div class="hero-container">
    <h3>{{ intro }}</h3>
    <img v-if="image" :src="getStrapiMedia(image.formats.small.url)" alt="image.name" />
      <!-- <NuxtLink class="bg-lightBlue hover:bg-white text-primary font-bold py-2 px-4 rounded"
        :to="callToActionUrl"
      >{{ callToActionText }}</NuxtLink> -->
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
    intro: {
      type: String,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
    callToActionUrl: {
      type: String,
      default: null,
    },
    callToActionText: {
      type: String,
      default: null,
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
