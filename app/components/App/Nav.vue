<!-- Application Navigation -->

<script lang="ts" setup>
defineProps<{
  items: ApiNavV1.NavItem[]
}>()
</script>

<template>
  <nav p-4>
    <ul flex="~ col" items-center>
      <li v-for="item in items" :key="item.link" text="vitesse-nuxt even:vitesse-vite" w-fit>
        <NuxtLink :to="item.link">
          <span>-> {{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
