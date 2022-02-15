<template>
    <div class="relative">
       <div  class="wave2-blob">
      <img class="w-full" src="/wave2.svg" alt="wave2" />
      </div>
    <div class="contentBlob-container bg-primary px-4">
      <div
        v-if="content1"
        class="content1 text-white"
        v-html="$md.render(content1)"
      >
        {{ content1 }}
      </div>
      <div
        v-if="content2"
        class="content2 text-white"
        v-html="$md.render(content2)"
      >
        {{ content2 }}
      </div>
      <div class="container relative h-80 w-80 image-blob">
        <div>
          <img src="/blob.svg" alt="blob" />
        </div>
        <div class="quote absolute inset-0 pt-16 pl-10">
          <h2 v-if="quote" class="text-primary">
            {{ quote }}
          </h2>
        </div>
      </div>
    </div>
    <div class="wave3-blob relative">
      <img class="w-full" src="/wave3.svg" alt="wave3" />
    </div>
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
<style>
.wave2-blob {
  margin-bottom: -1px;
}
.wave3-blob {
  margin-top: -1px;
}
.content1 {
  grid-area: content1;
}
.image-blob {
  grid-area: image-blob;
}
.content2 {
  grid-area: content2;
}
.text-blob {
  grid-area: text-blob;
}
.contentBlob-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 0rem 0rem;
  grid-template-areas:
    'content1'
    'image-blob'
    'content2';
  justify-items: center;
  background-color: #004586;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 767px) {
  .contentBlob-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0rem 2rem;
    grid-template-areas:
      'content1 image-blob'
      'content2 image-blob';
    justify-items: center;
    align-items: center;
  }
}
</style>
