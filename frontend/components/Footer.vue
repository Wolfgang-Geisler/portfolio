<template>
  <footer>
    <div class="container-footer mx-auto mt-8">
      <div class="footer-menu">
        <nuxt-link to="/datenschutz" class="nav-link">Datenschutz</nuxt-link>
        <nuxt-link to="/impressum" class="nav-link">Impressum</nuxt-link>
      </div>
      <div class="logo-footer">
        <p class="text-xs mt-1.5">&copy; Wolfgang Geisler 2021</p>
      </div>
    </div>
  </footer>
</template>
<style>
.container-footer {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: 0rem 20rem;
  grid-template-areas: 'footer-menu logo-footer';
  width: 100%;
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
    grid-template-areas: 'footer-menu logo-footer';
  }
  .footer-menu {
    grid-area: footer-menu;
  }
  .logo-footer {
    grid-area: logo-footer;
  }
}
</style>
