<!-- Application Navigation -->
<!-- For clarity, we use filename catches its name, so we use <AppNav> instead of <Nav> -->
<!-- As Nuxt will prefix component name with its folder name -->
<!-- See https://nuxt.com/docs/4.x/directory-structure/app/components#component-names -->

<script lang="ts" setup>
defineProps<{
  items: { title: string, link: string }[]
}>()
</script>

<template>
  <nav p-4 rounded-lg bg="gray:10 dark:gray:800">
    <ul>
      <li v-for="item in items" :key="item.link">
        <NuxtLink :to="item.link">
          <span>-> {{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
