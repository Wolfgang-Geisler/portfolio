<template>
  <div class="hero-container">
    <h3>{{ intro }}</h3>
    <img v-if="image" :src="image.formats.small.url" alt="image.name" />
    <button type="button">
      <NuxtLink
        :to="'/' + callToActionUrl"
      ></NuxtLink>
      {{ callToActionText }}
    </button>
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
