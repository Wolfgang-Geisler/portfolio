<template>
  <div class="projectsList-container">
    <!-- <button type="button"><NuxtLink :to="'/'"></NuxtLink>{{}}</button> -->
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    projects: {
      type: Array,
      default: null,
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
