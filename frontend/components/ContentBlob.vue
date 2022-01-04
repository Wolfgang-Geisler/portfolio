<template>
  <div class="relative">
    <img class="wave" src="/wave2.svg" alt="wave2" />
    <div class="contentBlob-container bg-primary px-4">
      <div class="content">
        <div class="content1">
          <div v-if="content1" class="text-white" v-html="$md.render(content1)">
            {{ content1 }}
          </div>
        </div>
        <div class="content2">
          <div v-if="content2" class="text-white" v-html="$md.render(content2)">
            {{ content2 }}
          </div>
        </div>
      </div>
      <div class="container relative h-80 w-80">
        <div class="image-blob">
          <img src="/blob.svg" alt="blob" />
        </div>
        <div class="quote absolute inset-0 pt-16 pl-8">
          <div v-if="quote" class="text-primary" v-html="$md.render(quote)">
            {{ quote }}
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img class="wave" src="/wave3.svg" alt="wave3" />
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
p {
  margin-bottom: 1rem;
}

.contentBlob-container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0rem 2rem;
  grid-template-areas:
    '. image-blob'
    'content image-blob';
  justify-items: center;
  align-items: center;
}
.text-blob {
  grid-area: text-blob;
}
.image-blob {
  grid-area: image-blob;
}
@media (max-width: 767px) {
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
  .content1 {
    grid-area: content1;
  }
  .image-blob {
    grid-area: image-blob;
  }
  .content2 {
    grid-area: content2;
  }
}
@media (max-width: 767px) {
  .wave {
    display: none;
  }
}
</style>
