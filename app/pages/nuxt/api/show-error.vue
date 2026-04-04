<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const timer = ref<NodeJS.Timeout | null>(null)
const timeout = ref<NodeJS.Timeout | null>(null)
const timeLeft = ref(3.0)

onMounted(() => {
  timer.value = setInterval(() => {
    timeLeft.value -= 0.1
    if (timeLeft.value <= 0.1) {
      timeLeft.value = 0
      if (timer.value)
        clearInterval(timer.value)
    }
  }, 100)
  timeout.value = setTimeout(() => {
    timeLeft.value = 0
    if (timer.value)
      clearInterval(timer.value)
    showError({ status: 500, statusText: 'This is a test error thrown from the create-error page.' })
  }, 3000)
})

onBeforeRouteLeave(() => {
  if (timer.value)
    clearInterval(timer.value)
  if (timeout.value)
    clearTimeout(timeout.value)
})
onUnmounted(() => {
  if (timer.value)
    clearInterval(timer.value)
  if (timeout.value)
    clearTimeout(timeout.value)
})
</script>

<template>
  <PageHomeBase title="Nuxt API / showError">
    The error will be shown in <span text-vitesse>{{ timeLeft.toFixed(1) }}</span> seconds, and the page will be redirected to the error page...!
  </PageHomeBase>
</template>
