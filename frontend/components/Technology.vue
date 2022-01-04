<template>
  <div class="technology-container my-16 px-4">
      <div>Damit habe ich bereits gearbeitet</div>
    <ul>
      <li v-for="technology in technologies" :key="technology.id">
        <div class="icon-image">
          <img
            v-if="technology.icon"
            :src="getStrapiMedia(technology.icon.url)"
            :alt="technology.icon.alternativeText"
          />
        </div>
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
