<template>
  <div class="bg-primary py-16">
    <div class="project-container my-8 px-4">
      <div class="title text-light flex justify-center">
        <div>{{ title }}</div>
      </div>
      <div class="container m-auto">
        <ul class="project-list flex flex-col mb-8">
          <li
            v-for="(project, index) in projects"
            :key="project.id"
            :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
            class="flex flex-col md:flex-row text-white my-8"
          >
            <div class="project-image my-4 md:px-4 md:w-1/2">
              <img
                v-if="project.image"
                :src="getStrapiMedia(project.image.formats.small.url)"
                :alt="project.image.alternativeText"
              />
            </div>
            <div class="project-list md:w-1/2 md:flex md:flex-col md:space-y-4 md:px-4">
              <div>
                <div class="project-title font-title my-4">
                  {{ project.title }}
                </div>
                <div class="project-text mb-4">
                  {{ project.description }}
                </div>
              </div>
              <div class="project-link">
                <NuxtLink :to="'/projects/' + project.slug" class="button">
                  {{ project.callToActionText }}: {{ project.title }}
                </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        v-if="callToActionUrl && callToActionText"
        class="flex justify-center"
      >
        <NuxtLink :to="callToActionUrl" class="button">{{
          callToActionText
        }}</NuxtLink>
      </div>
    </div>
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

<style></style>
