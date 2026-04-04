<!-- Application Navigation -->
<!-- For clarity, we use filename catches its name, so we use <AppNav> instead of <Nav> -->
<!-- As Nuxt will prefix component name with its folder name -->
<!-- See https://nuxt.com/docs/4.x/directory-structure/app/components#component-names -->

<script lang="ts" setup>
defineProps<{
  items: ApiNav.NavItem[]
}>()
</script>

<template>
  <nav p-4>
    <ul>
      <li v-for="item in items" :key="item.link">
        <NuxtLink :to="item.link">
          <span :class="item.class">-> {{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
