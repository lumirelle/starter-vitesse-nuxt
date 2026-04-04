<!-- Application Footer -->
<!-- For clarity, we use filename catches its name, so we use <AppFooter> instead of <Footer> -->
<!-- As Nuxt will prefix component name with its folder name -->
<!-- See https://nuxt.com/docs/4.x/directory-structure/app/components#component-names -->

<template>
  <div text="xl gray4" m-5 flex="~ gap3" justify-center>
    <NuxtLinkLocale i-carbon-campsite to="index" />
    <a i-carbon-logo-github href="https://github.com/lumirelle/starter-vitesse-nuxt" target="_blank" />
    <ToggleColorMode />
    <ToggleLanguage />
  </div>
</template>
