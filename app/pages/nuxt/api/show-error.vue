<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const TIMEOUT = 5000

const intervalTimer = ref<NodeJS.Timeout | null>(null)
const timeoutTimer = ref<NodeJS.Timeout | null>(null)
const timeLeft = ref(TIMEOUT)

onMounted(() => {
  intervalTimer.value = setInterval(() => {
    timeLeft.value -= 100
    if (timeLeft.value <= 100) {
      timeLeft.value = 0
      if (intervalTimer.value)
        clearInterval(intervalTimer.value)
    }
  }, 100)
  timeoutTimer.value = setTimeout(() => {
    timeLeft.value = 0
    if (intervalTimer.value)
      clearInterval(intervalTimer.value)
    showError({ status: 500, statusText: 'This is a test error thrown from the create-error page.' })
  }, TIMEOUT)
})

onBeforeRouteLeave(() => {
  if (intervalTimer.value)
    clearInterval(intervalTimer.value)
  if (timeoutTimer.value)
    clearTimeout(timeoutTimer.value)
})
onUnmounted(() => {
  if (intervalTimer.value)
    clearInterval(intervalTimer.value)
  if (timeoutTimer.value)
    clearTimeout(timeoutTimer.value)
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <I18nT keypath="description" tag="span">
      <template #time>
        <span text-vitesse>{{ (timeLeft / 1000).toFixed(1) }}</span>
      </template>
    </I18nT>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt API / showError
  description: The error will be shown in {time} seconds, and the page will be redirected to the error page...!
zh:
  title: Nuxt API / showError
  description: 错误将在 {time} 秒后显示，并且页面将被重定向到错误页面...！
</i18n>
