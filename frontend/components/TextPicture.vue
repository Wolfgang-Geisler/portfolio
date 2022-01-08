<template>
  <div class="textImage-container md:my-8 px-4">
    <div v-if="text" class="text-content" v-html="$md.render(text)">
      {{ text }}
    </div>
    <div class="image">
      <img
        v-if="image"
        :src="getStrapiMedia(image.formats.small.url)"
        :alt="image.name"
      />
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
<style>
.text-content {
  grid-area: text-content;
}
.image {
  grid-area: image;
}

.textImage-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 2rem 0rem;
  grid-template-areas:
    'image'
    'text-content';
  justify-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 767px) {
  .textImage-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0rem 2rem;
    grid-template-areas: 'text-content image';
    justify-items: center;
    align-items: center;
  }
}
</style>
