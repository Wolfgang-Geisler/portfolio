<template>
  <footer>
    <!-- <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div
          class="
            mt-8
            sm:mt-0 sm:w-full sm:px-8
            flex flex-col
            md:flex-row
            justify-between
          "
        > -->
    <div class="container-footer">
      <div class="footer-menu">
        <nuxt-link to="/datenschutz" class="nav-link">Datenschutz</nuxt-link>
        <nuxt-link to="/impressum" class="nav-link">Impressum</nuxt-link>
      </div>
      <div class="logo-footer">
        <p class="text-xs  mt-1.5">&copy; Wolfgang Geisler 2021</p>
      </div>
    </div>
    <!-- </div>
      </div>
    </div> -->
  </footer>
</template>
<style>
/* .container-footer {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'footer-menu logo-footer';
}
.footer-menu {
  grid-area: footer-menu;
  padding-left: 8rem;
}
.logo-footer {
  grid-area: logo-footer;
  padding-left: 15rem;
} */
</style>
