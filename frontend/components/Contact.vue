<template>
  <div>
    <div>
      <form @submit.prevent="onSubmit()">
        <div>
          <label>Email Adresse</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Name"
            required="required"
          />
        </div>
        <div>
          <label>Betreff</label>
          <input
            v-model="reference"
            type="text"
            class="form-control"
            placeholder="Betreff"
            required="required"
          />
        </div>
        <div>
          <label>Nachricht</label>
          <textarea
            v-model="message"
            type="text"
            class="form-control"
            placeholder="Nachricht"
            required="required"
          ></textarea>
        </div>
        <hr />
        <div v-if="isSuccess" class="success">Danke, für Ihre Nachricht!</div>
        <div v-if="error" class="error">Leider, ist ein Fehler passiert!</div>
        <button type="submit">Senden</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Contact',
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
          {
            headers: {
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          this.isSuccess = response.data.success
        })
        .catch((error) => {
          this.error = error.message
        })
    },
  },
}
</script>
