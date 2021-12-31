<template>
  <div class="contentBlob-container my-8 px-4">
    <p v-if="content1" v-html="$md.render(content1)">
      {{ content1 }}
    </p>
    <p v-if="content2" v-html="$md.render(content2)">
      {{ content2 }}
    </p>
  </div>
</template>
<script>
import { getStrapiMedia } from '../utils/medias'
export default {
  props: {
    content1: {
      type: String,
      default: null,
    },
    content2: {
      type: String,
      default: null,
    },
    quote: {
      type: String,
      default: null,

    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
