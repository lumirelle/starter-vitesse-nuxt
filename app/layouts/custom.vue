<template>
  <div p="x-10 y-20">
    <slot />
    <AppFooter>
      <div text="sm center" m="x-auto t-5" opacity-25>
        [Custom Layout]
      </div>
    </AppFooter>
  </div>
</template>
