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

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
      const msg = {
        to: 'wolfganggeisler@yahoo.de',
        from: 'test@example.com',
        subject: 'test',
        text: 'this is a test',
        html: '<strong>test message</strong>'
      }
      sgMail.send(msg)
            .then((response)=> {
              console.log(response[0].statusCode)
              console.log(response[0].headers)
            })
            .catch((error) => {
              console.error(error)
            })
    },
  },
}
</script>
