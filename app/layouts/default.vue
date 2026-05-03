<template>
  <div p="x-10 y-20">
    <AppHeader mb-6 />
    <slot />
    <AppFooter>
      <div text="sm center" m="x-auto t-5" opacity-25>
        [Default Layout]
      </div>
    </AppFooter>
  </div>
</template>
