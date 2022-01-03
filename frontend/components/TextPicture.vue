<template>
  <div class="textImage-container md:my-8 px-4">
    <p v-if="text" class="text-content" v-html="$md.render(text)">{{ text }}</p>
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
.textImage-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0rem 2rem;
  grid-template-areas:
    'text-content image';
  justify-items: center;
  align-items:center
}
.text-content {
  grid-area: text-content;
}
.image {
  grid-area: image;
}

@media (max-width: 767px) {
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
    background-color: #004586;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .text-content {
    grid-area: text-content;
    color: white;
  }
  .image {
    grid-area: image;
  }
}
</style>
