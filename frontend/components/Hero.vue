<template>
  <div class="hero relative">
    <div class="overflow-hidden">
      <img src="/wave.svg" class="wave h-full w-full object-cover" alt="wave" />
    </div>
    <div class="bg-primary h-36"></div>
    <div class="container">
      <div class="hero-container absolute inset-0">
        <div class="hero-image">
          <img
            v-if="image"
            :src="getStrapiMedia(image.formats.small.url)"
            alt="image.name"
          />
        </div>
        <div class="intro-text flex flex-col items-center mx-auto px-4">
          <h3>{{ intro }}</h3>
          <NuxtLink
            v-if="callToActionUrl && callToActionText"
            class="
              bg-light
              hover:bg-white
              text-primary
              font-bold
              py-2
              px-4
              mt-8
              rounded
            "
            :to="callToActionUrl"
            >{{ callToActionText }}</NuxtLink
          >
        </div>
      </div>
    </div>
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
<style>
.hero-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0em 0em;
  grid-template-areas:
    '. hero-image'
    'intro-text hero-image';
  justify-items: center;
  align-items: end;
}
.intro-text {
  grid-area: intro-text;
}
.hero-image {
  grid-area: hero-image;
}
</style>
