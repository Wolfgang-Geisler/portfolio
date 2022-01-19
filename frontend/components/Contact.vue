<template>
  <div class="flex items-center h-screen w-full my-16 bg-primary">
    <div
      class="
        w-full
        border-2 border-primary
        bg-white
        rounded
        shadow-lg
        p-8
        m-4
        md:max-w-sm md:mx-auto
      "
    >
      <h1 class="block w-full text-center text-primary mb-6">
        {{ request }}
      </h1>
      <form
        class="mb-4 md:flex md:flex-wrap md:justify-between"
        @submit.prevent="onSubmit()"
      >
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-primary"
            >E-Mail</label
          >
          <input
            v-model="email"
            type="email"
            class="border-2 border-primary py-2 px-3 text-black md:mr-2"
            name="email"
            placeholder="E-Mail"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-primary"
            >Name</label
          >
          <input
            v-model="name"
            type="text"
            class="border-2 border-primary py-2 px-3 text-black md:mr-2"
            name="name"
            placeholder="Name"
            required="required"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-primary"
            >Betreff</label
          >
          <input
            v-model="reference"
            type="text"
            class="border-2 border-primary py-2 px-3 text-black md:mr-2"
            name="betreff"
            placeholder="Betreff"
            required="required"
          />
        </div>
        <div class="flex flex-col mb-4 md:w-full">
          <label class="mb-2 uppercase font-bold text-lg text-primary"
            >Nachricht</label
          >
          <textarea
            v-model="message"
            type="text"
            class="border-2 border-primary py-2 px-3 text-black md:mr-2"
            name="nachricht"
            placeholder="Nachricht"
            required="required"
          ></textarea>
        </div>
        <hr />
        <div v-if="isSuccess" class="success">Danke, für Ihre Nachricht!</div>
        <div v-if="error" class="error">Leider, ist ein Fehler passiert!</div>
        <button class="button uppercase text-lg mx-auto" type="submit">
          Senden
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { getStrapiMedia } from '../utils/medias'
export default {
  props: {
    request: {
      type: String,
      default: null,
    },
    mail: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
      name: '',
      email: '',
      message: '',
      reference: '',
      isSuccess: false,
      error: false,
    }
  },
  methods: {
    getStrapiMedia,
    onSubmit() {
      console.log('Hallo!!!')
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        reference: this.reference,
      }
      axios
        .post(
          'https://getform.io/f/{unique-endpoint-generated-on-step-1}',
          data,
          console.log('Grüß dich!!!')
        )
        .then((response) => {
          this.isSuccess = response.data.success
          console.log('Servus!!!')
        })
        .catch((error) => {
          this.error = error.message
          console.log('Wer bist du?')
        })
    },
  },
}
</script>
