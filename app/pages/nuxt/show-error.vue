<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

setTimeout(() => {
  showError({ status: 500, statusText: 'This is a test error thrown from the create-error page.' })
}, 1000)
</script>

<template>
  <PageHomeBase />
</template>
