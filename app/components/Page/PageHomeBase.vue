<script lang="ts" setup>
defineProps<{
  title: string
}>()

const { t } = useLocalI18n()
</script>

<template>
  <div>
    <header>
      <h1 text="xl center" font-extrabold mb-4>
        {{ title }}
      </h1>
    </header>
    <main>
      <div mb-4>
        <slot />
      </div>
      <div>
        <NuxtLinkLocale to="index" text-vitesse-vite mx-auto p="x-4 y-2" border="~ gray-200 dark:gray-800" rounded-2xl bg="gray-50 dark:gray-950" w-fit block>
          <span>> </span><span>cd ~&nbsp;&nbsp;&nbsp;&nbsp;</span><span># {{ t('come-back-homepage') }}</span>
        </NuxtLinkLocale>
      </div>
    </main>
  </div>
</template>

<i18n lang="yaml">
en:
  come-back-homepage: Come back to the homepage!
zh:
  come-back-homepage: 回到首页！
</i18n>
