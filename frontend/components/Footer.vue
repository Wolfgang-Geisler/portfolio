<template>
  <footer>
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div
          class="
            mt-8
            sm:mt-0 sm:w-full sm:px-8
            flex flex-col
            md:flex-row
            justify-between
          "
        >
          <div class="flex flex-col">
            <nuxt-link
              to="/datenschutz"
              class="
                text-black
                hover:bg-primary hover:text-white
                px-3
                py-2
                rounded-md
                text-sm
                font-medium
              "
              >Datenschutz</nuxt-link
            >
          </div>
          <div class="flex flex-col">
            <nuxt-link
              to="/impressum"
              class="
                text-black
                hover:bg-primary hover:text-white
                px-3
                py-2
                rounded-md
                text-sm
                font-medium
              "
              >Impressum</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
