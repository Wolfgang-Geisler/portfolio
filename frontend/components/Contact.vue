<template>
  <div>
    <div>
      <form
        accept-charset="UTF-8"
        v-on:submit.prevent="onSubmit()"
        method="POST"
      >
        <div>
          <label>Email Adresse</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            class="form-control"
            placeholder="Name"
            required="required"
          />
        </div>
        <div>
          <label>Betreff</label>
          <input
            type="text"
            v-model="reference"
            class="form-control"
            placeholder="Betreff"
            required="required"
          />
        </div>
        <div>
          <label>Nachricht</label>
          <textarea
            type="text"
            v-model="message"
            class="form-control"
            placeholder="Nachricht"
            required="required"
          ></textarea>
        </div>
        <hr />
        <div class="success" v-if="isSuccess">Danke, für Ihre Nachricht!</div>
        <div class="error" v-else>Leider, ist ein Fehler passiert!</div>
        <button type="submit">Senden</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Contact',
  props: {
    msg: String,
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
    onSubmit() {
      let data = {
        name: this.name,
        email: this.email,
        message: this.message,
        reference: this.reference,
      }
      axios
        .post(
          'https://getform.io/f/{unique-endpoint-generated-on-step-1}',
          data,
          {
            headers: {
              Accept: 'application/json',
            },
          }
        )
        .then(
          (response) => {
            this.isSuccess = response.data.success
          },
          (response) => {
            this.error = response.data.error
          }
        )
    },
  },
}
</script>
