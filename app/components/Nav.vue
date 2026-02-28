<script lang="ts" setup>
defineProps<{
  items: { title: string; link: string }[]
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
