<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-black
              hover:text-white hover:bg-congress-blue-500
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            v-show="!dropdownOpen"
            aria-expanded="false"
            @click="toggleNavigation"
          >
            <span class="sr-only">Open main menu</span>
          </button>
          <div class="sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current-->
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
        </div>
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
    toogleNavigation() {
      this.dropdownOpen = !this.dropdownOpen
    },
  },
}
</script>
