<script lang="ts" setup>
defineProps<{
  title: string
}>()

const { t } = useI18n()
</script>

<template>
  <div>
    <h1 text-xl font-extrabold mb-4>
      {{ title }}
    </h1>
    <slot />
    <div>
      <NuxtLinkLocale class="text-sm m-3 btn" to="index">
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
