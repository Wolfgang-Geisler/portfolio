<template>
  <div class="hero-container">
    <h3>{{ intro }}</h3>
    <img v-if="image" :src="image.formats.small.url" alt="image.name" />
    <button type="button">
      <NuxtLink
        :to="'/' + mainNavigation.navigationItem.id[1].page.slug"
      ></NuxtLink
      >{{ callToActionUrl }}
    </button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters(['navigations']),
    mainNavigation() {
      return this.navigations.find((nav) => nav.slug === 'main')
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
