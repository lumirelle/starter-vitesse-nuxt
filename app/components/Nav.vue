<script lang="ts" setup>
defineProps<{
  items: { title: string, link: string }[]
}>()
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, index) in items" :key="item.link">
        <NuxtLink :to="item.link">
          <span>No {{ index + 1 }}: {{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
