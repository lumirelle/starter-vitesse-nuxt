<!--
  This is the customized `NuxtIcon` component, overriding the component with the same name provided by `@nuxt-svgo`
  with more cleaner implementation
-->

<script setup lang="ts">
const props = defineProps<{
  icon: object
}>()

function RenderIcon() {
  return h(props.icon)
}
</script>

<template>
  <RenderIcon />
</template>
