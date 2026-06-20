<template>
  <!-- In order to support page-level transitions -->
  <!-- We need to ensure the layout has only one root element -->
  <div>
    <AppHeader />
    <slot />
    <AppFooter>
      <div text="sm center" m="x-auto t-5" opacity-25>
        [Default Layout]
      </div>
    </AppFooter>
  </div>
</template>
