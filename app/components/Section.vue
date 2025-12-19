<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">
      {{ title }}
    </h2>
    <div class="space-y-4">
      <slot />
    </div>
  </section>
</template>
