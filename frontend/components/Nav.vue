<template>
  <nav class="bg-white" role="navigation" aria-label="main navigation">
    <div class="container-nav px-4">
      <div class="logo">
        <nuxt-link to="/">
          <img class="w-20 mr-2" src="/logo.png" alt="Logo" />
        </nuxt-link>
      </div>
      <div class="main-nav mt-2.5 md:block" :class="{ hidden: !open }">
        <ul
          v-if="mainNavigation"
          class="flex flex-col items-center md:flex-row"
        >
          <li>
            <NuxtLink
              class="nav-link block"
              v-for="navigationLink in mainNavigation.navigationItem"
              :key="navigationLink.id"
              :to="'/' + navigationLink.page.slug"
            >
              {{ navigationLink.page.title }}</NuxtLink
            >
          </li>
          <li>
            <nuxt-link to="/ueber-mich" class="nav-link block"
              >Über mich</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/portfolio" class="nav-link block"
              >Portfolio</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/kontakt" class="nav-link block">Kontakt</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="hamburger-menu flex md:hidden flex-col justify-start mt-2.5">
        <button
          class="text-black w-10 h-10 p-6 relative focus:outline-none bg-white"
          @click="toggleNavigation"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="
              block
              w-10
              absolute
              left-1/2
              top-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <span
              aria-hidden="true"
              class="
                block
                absolute
                h-0.5
                w-5
                bg-current
                transform
                transition
                duration-500
                ease-in-out
              "
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
            ></span>
            <span
              aria-hidden="true"
              class="
                block
                absolute
                h-0.5
                w-5
                bg-current
                transform
                transition
                duration-500
                ease-in-out
              "
              :class="{ 'opacity-0': open }"
            ></span>
            <span
              aria-hidden="true"
              class="
                block
                absolute
                h-0.5
                w-5
                bg-current
                transform
                transition
                duration-500
                ease-in-out
              "
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
            ></span>
          </div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { getStrapiMedia } from '../utils/medias'

export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleNavigation() {
      this.open = !this.open
    },
    getStrapiMedia,
  },
  computed: {
    ...mapGetters(['navigations']),
    mainNavigation() {
      return this.navigations.find((nav) => nav.slug === 'main')
    },
  },
}
</script>
<style>
.container-nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: 'logo main-nav hamburger-menu';
}

.logo {
  grid-area: logo;
}

.main-nav {
  grid-area: main-nav;
}

.hamburger-menu {
  grid-area: hamburger-menu;
}

/*mobile navigation*/
@media (max-width: 640px) {
  .container-nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    grid-auto-columns: 1fr;
    gap: 0em 0em;
    grid-auto-flow: column;
    grid-template-areas: 'logo main-nav hamburger-menu';
  }
  .logo {
    grid-area: logo;
  }
  .hamburger-menu {
    grid-area: hamburger-menu;
  }
  .main-nav {
    grid-area: main-nav;
  }
}
</style>
