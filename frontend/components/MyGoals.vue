<template>
  <div class="meineZiele-container">
      <div class="meineZiele-title">{{title}}</div>
      <div class="meineZiele-content">{{text}}</div>
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
    text: {
      type: String,
      default: null,
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
