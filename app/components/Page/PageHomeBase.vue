<script lang="ts" setup>
defineProps<{
  title: string
}>()

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <h1 text-xl font-extrabold mb-4 text-center>
      {{ title }}
    </h1>
    <div mb-4>
      <slot />
    </div>
    <div>
      <NuxtLinkLocale to="index" text-vitesse-vite mx-auto px-4 py-2 text-start border border-gray-200 rounded-2xl bg-gray-50 w-fit block dark:border-gray-800 dark:bg-gray-950>
        <span>> </span><span>cd ~&nbsp;&nbsp;&nbsp;&nbsp;</span><span># {{ t('come-back-homepage') }}</span>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  come-back-homepage: Come back to the homepage!
zh:
  come-back-homepage: 回到首页！
</i18n>
