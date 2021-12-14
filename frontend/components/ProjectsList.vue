<template>
  <div class="bg-primary py-8 my-8">
    <div class="project-container my-8 px-4">
      <div class="title text-light flex justify-center">
        <h2>{{ title }}</h2>
      </div>
      <div class="container m-auto">
        <ul class="project-list flex flex-col mb-8">
          <li
            v-for="(project, index) in projects"
            :key="project.id"
            :class="{ 'md:flex-row-reverse': index % 2 === 0 }"
            class="flex flex-col md:flex-row text-white my-8"
          >
            <div class="project-image flex justify-center my-4">
              <img
                v-if="project.image"
                :src="getStrapiMedia(project.image.formats.small.url)"
                alt="project.image.name"
              />
            </div>
            <div class="flex-grow flex flex-col space-y-4 px-4">
              <div>
                <h3 class="project-title font-title my-4">
                  {{ project.title }}
                </h3>
                <p class="project-text">
                  {{ project.description }}
                </p>
              </div>
              <div>
                <NuxtLink
                  :to="'/projects/' + project.slug"
                  class="
                    bg-light
                    hover:bg-white
                    text-primary
                    font-bold
                    py-2
                    px-4
                    rounded
                  "
                >
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
