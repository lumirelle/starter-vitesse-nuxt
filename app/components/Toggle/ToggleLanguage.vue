<script setup lang="ts">
const { locale, locales } = useI18n()

const availableLocales = computed(() =>
  locales.value.filter(i => i.code !== locale.value)
    .map(i => ({ ...i, flag: getNationFlag(i.code) })),
)

function getNationFlag(code: string): string {
  switch (code) {
    case 'zh':
      return 'i-twemoji-flag-china'
    case 'en':
      return 'i-twemoji-flag-united-kingdom'
    default:
      return 'i-twemoji-flag-united-nations'
  }
}
</script>

<template>
  <SwitchLocalePathLink v-for="availableLocale in availableLocales" :key="availableLocale.code" :class="availableLocale.flag" :locale="availableLocale.code" :title="availableLocale.name" :aria-label="availableLocale.name" />
</template>
