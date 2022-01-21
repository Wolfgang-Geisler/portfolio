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
        <div class="container flex justify-center my-2">
          <div v-if="isSuccess" class="success text-primary">
            <h3>Danke, für Ihre Nachricht!</h3>
          </div>
          <div v-if="error" class="error text-primary">
            <h3>Leider, ist ein Fehler passiert!</h3>
          </div>
        </div>
        <div class="container flex justify-center">
          <button class="button uppercase text-lg" type="submit">Senden</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { getStrapiMedia } from '../utils/medias'
export default {
  name: 'Contact',
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
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        reference: this.reference,
      }
      axios
        .post('https://getform.io/f/4b3459d2-f851-41c7-b4a4-c9edcb77d62d', data)
        .then((response) => {
          this.isSuccess = response.data.success
          this.isSuccess = true
          this.name = ''
          this.email = ''
          this.message = ''
          this.reference = ''
        })
        .catch((error) => {
          this.error = error.message
          this.error = true
        })
    },
  },
}
</script>
