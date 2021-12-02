<template>
  <footer>
    <div class="container-footer-icons flex justify-center my-4">
      <h3>Mehr über mich</h3>
    </div>
    <div class="footer-icons flex justify-center space-x-4">
      <template v-for="socialMedia in socialMediaIcons"
        ><a
          class="fa"
          :key="socialMedia.id"
          :href="'mailto:' + socialMedia.url"
          v-if="socialMedia.text === 'e-mail'"
          ><fa :icon="['fas', socialMedia.icon]" />
        </a>
        <a
          class="fa"
          :key="socialMedia.id"
          :href="socialMedia.url"
          v-else
          target="_blank"
        >
          <fa :icon="['fab', socialMedia.icon]" /> </a
      ></template>
    </div>
    <div class="container-footer mx-auto mb-4 mt-8 px-8">
      <div class="footer-menu">
        <nuxt-link to="/datenschutz" class="nav-link">Datenschutz</nuxt-link>
        <nuxt-link to="/impressum" class="nav-link">Impressum</nuxt-link>
      </div>
      <div class="logo-footer flex sm:justify-end">
        <p class="text-xs mt-1.5">&copy; Wolfgang Geisler 2021</p>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'
import { getStrapiMedia } from '../utils/medias'
export default {
  computed: {
    ...mapGetters(['socialMediaIcons']),
    ...mapGetters(['navigations']),
    footerNavigation() {
      return this.navigations.find((nav) => nav.key === 'legal')
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>
<style>
.container-footer {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: 0rem 0rem;
  grid-template-areas: 'footer-menu logo-footer';
}
.footer-menu {
  grid-area: footer-menu;
}
.logo-footer {
  grid-area: logo-footer;
}

/*mobile footer*/
@media (max-width: 640px) {
  .container-footer {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'footer-menu footer-menu'
      'logo-footer logo-footer';
    justify-items: center;
  }
  .footer-menu {
    grid-area: footer-menu;
    margin-bottom: 1rem;
  }
  .logo-footer {
    grid-area: logo-footer;
  }
}
</style>
