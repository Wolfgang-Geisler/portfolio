<template>
  <div class="project-container my-8 px-4">
    <div class="title text-light flex justify-center">
      <h2>{{ title }}</h2>
    </div>
    <ul class="project-list flex flex-col">
      <li v-for="project in projects" :key="project.id">
        <div class="project-title font-title my-4">
          <h3>{{ project.title }}</h3>
        </div>
        <div class="project-text">
          {{ project.description }}
        </div>
        <div class="project-image flex justify-center my-4">
          <img
            v-if="project.image"
            :src="getStrapiMedia(project.image.formats.small.url)"
            alt="project.image.name"
          />
        </div>
        <div class="flex justify-center">
          <NuxtLink
            class="
              bg-light
              hover:bg-white
              text-primary
              font-bold
              py-2
              px-4
              rounded
            "
            :to="callToActionUrl"
            >{{ callToActionText }}</NuxtLink
          >
        </div>
      </li>
    </ul>
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
