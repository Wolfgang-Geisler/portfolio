<template>
  <nav class="bg-white" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/">
          <img class="w-20 mr-2" src="/logo.png" alt="Logo" />
        </nuxt-link>
      </div>
      <div class="main-nav md:block" :class="{ hidden: !open }">
        <nuxt-link to="/ueber-mich" class="nav-link">Über mich</nuxt-link>
        <nuxt-link to="/portfolio" class="nav-link">Portfolio</nuxt-link>
        <nuxt-link to="/kontakt" class="nav-link">Kontakt</nuxt-link>
      </div>
      <div class="hamburger-menu md:hidden flex justify-end">
        <button
          class="text-black w-10 relative focus:outline-none bg-white"
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

    <!-- <div class="sm:visible md:hidden display:flex"> -->

    <!-- <button
        class="text-black w-10 h-10 relative focus:outline-none bg-white flex-auto"
        @click="toggleNavigation"
      > -->
    <!--  <span class="sr-only">Open main menu</span>
        <div class="hidden mobile-dropdown">
          <ul class="mobile-menu-list">
            <li>
              <nuxt-link
                to="/"
                class="
                  navbar-item
                  block
                  text-sm
                  px-2
                  py-4
                  hover:text-white hover:bg-primary
                  transition
                  duration-300
                  flex-auto
                "
                >Home</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/ueber-mich"
                class="
                  navbar-item
                  block
                  text-sm
                  px-2
                  py-4
                  hover:text-white hover:bg-primary
                  transition
                  duration-300
                  flex-auto
                "
                >Über mich</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/portfolio"
                class="
                  navbar-item
                  block
                  text-sm
                  px-2
                  py-4
                  hover:text-white hover:bg-primary
                  transition
                  duration-300
                  flex-auto
                "
                >Portfolio</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/contact"
                class="
                  navbar-item
                  block
                  text-sm
                  px-2
                  py-4
                  hover:text-white hover:bg-primary
                  transition
                  duration-300
                  flex-auto
                "
                >Kontakt</nuxt-link
              >
            </li>
          </ul>
        </div>
      </button>
    </div>
    <div class="sm:block sm:ml-6">
      <div class="flex space-x-4">
        <nuxt-link to="/">
          <img class="h-8 w-12 mr-2" src="/logo.png" alt="Logo" />
        </nuxt-link>
        <nuxt-link
          to="/ueber-mich"
          class="
            text-black
            hover:bg-primary hover:text-white
            px-3
            py-2
            rounded-md
            text-sm
            font-medium
          "
          >Über mich</nuxt-link
        >
        <nuxt-link
          to="/portfolio"
          class="
            text-black
            hover:bg-primary hover:text-white
            px-3
            py-2
            rounded-md
            text-sm
            font-medium
          "
          >Portfolio</nuxt-link
        >
        <nuxt-link
          to="/kontakt"
          class="
            text-black
            hover:bg-primary hover:text-white
            px-3
            py-2
            rounded-md
            text-sm
            font-medium
          "
          >Kontakt</nuxt-link -->
    <!--  </div>
    </div> -->
  </nav>
</template>

<script>
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
  },
}
</script>
<style>
.container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: 'logo main-nav hamburger-menu';
}

.logo {
  grid-area: logo;
  padding-left: 1rem;
}

.main-nav {
  grid-area: main-nav;
  padding-left: 1rem;
}

.hamburger-menu {
  grid-area: hamburger-menu;
}

/* mobile navigation */
/* @media (max-width: 640px) {
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 0em;
    grid-auto-flow: row;
      width: 100%;
      height: 100%;
  }
  .main-nav {
    grid-row-start: 2;
    grid-column-start: 3;
    grid-auto-flow: column;
  }

  .logo {
    grid-column-start: 2;
}

  .hamburger-menu {
    grid-column-start: 3;
  } */
/*
  .nav-link {
    grid-area: nav-link;
  }
  */


/*mobile navigation*/
@media (max-width: 640px) {
  .container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-auto-columns: 1fr;
    gap: 0em 0em;
    grid-auto-flow: column;
    grid-template-areas:
      'logo .hamburger-menu'
      'main-nav main-nav main-nav';
    justify-content: stretch;
    width: 100%;
    height: 100%;
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
