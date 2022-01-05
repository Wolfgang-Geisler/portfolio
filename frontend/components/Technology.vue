<template>
  <div class="technology-container my-16 px-4">
    <h2 class="text-primary mb-4">Damit habe ich bereits gearbeitet</h2>
    <ul class="flex flex-row">
      <li v-for="technology in technologies" :key="technology.id" class="mx-auto w-screen">
        <img
          v-if="technology.icon"
          :src="getStrapiMedia(technology.icon.url)"
          :alt="technology.icon.alternativeText"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
    technologies: {
      type: Array,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    icon: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
