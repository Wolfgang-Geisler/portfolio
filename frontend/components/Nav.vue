<template>
  <nav class="bg-white" role="navigation" aria-label="main navigation">
    <!-- Mobile menu button-->
    <div class="sm:visible display:flex">
      <button
        class="text-black w-10 h-10 relative focus:outline-none bg-white flex-auto"
        @click="toggleNavigation"
      >
        <span class="sr-only">Open main menu</span>
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
        <!-- Current-->
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
          >Kontakt</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    }
  },
  methods: {
    toggleNavigation() {
      this.dropdownOpen = !this.dropdownOpen
    },
  },
}
</script>
