<template>
  <div class="hero1 relative">
    <div class="overflow-hidden">
      <img
        src="/wave.svg"
        class="wave-hero h-full w-full object-cover"
        alt="wave"
      />
    </div>
    <div class="bg-primary md:h-36"></div>
    <div class="container">
      <div class="hero-container md:absolute inset-0">
        <div class="hero-image">
          <img
            v-if="image"
            :src="getStrapiMedia(image.formats.small.url)"
            alt="image.name"
          />
        </div>
        <div
          class="
            intro-text
            flex flex-col
            sm:items-center
            items-center
            md:items-start
            mx-auto
            px-4
          "
        >
          <h3 class="mb-4 md:text-white">{{ intro }}</h3>
          <NuxtLink
            v-if="callToActionUrl && callToActionText"
            :to="callToActionUrl"
            class="button"
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

@media (max-width: 768px) {
  .hero-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 2rem 0rem;
    grid-template-areas:
      'hero-image'
      'intro-text';
    justify-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .intro-text {
    grid-area: intro-text;
    @apply mb-16;
  }
  .hero-image {
    grid-area: hero-image;
    @apply mx-auto
    w-1/2;
  }
  .wave-hero {
    @apply hidden;
  }
}
</style>
