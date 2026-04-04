<!-- Section to organize content -->
<!-- For clarity, we use filename catches its name, so we use <ContentSection> instead of <Section> -->
<!-- As Nuxt will prefix component name with its folder name -->
<!-- See https://nuxt.com/docs/4.x/directory-structure/app/components#component-names -->

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section>
    <h2 text-2xl font-bold mb-4 text-center>
      {{ title }}
    </h2>
    <div gap-4 grid grid-cols-2>
      <slot />
    </div>
  </section>
</template>
