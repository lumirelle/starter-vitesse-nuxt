<script setup lang="ts">
const { text = 'nuxt-spec' } = defineProps<{ text?: string }>()
</script>

<template>
  <div style="margin: 1rem 0; padding: 0.5rem; border: 1px solid black">
    {{ text }}
  </div>
</template>
