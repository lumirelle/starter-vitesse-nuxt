<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

function getNationFlag(code: string) {
  if (code === 'zh')
    return 'i-twemoji-flag-china'
  else if (code === 'en')
    return 'i-twemoji-flag-united-kingdom'
  else if (code === 'fr')
    return 'i-twemoji-flag-france'
  return 'i-twemoji-flag-united-nations'
}
</script>

<template>
  <NuxtLink
    v-for="availableLocale in availableLocales"
    :key="availableLocale.code" :to="switchLocalePath(availableLocale.code)"
    :class="getNationFlag(availableLocale.code)"
  />
</template>
