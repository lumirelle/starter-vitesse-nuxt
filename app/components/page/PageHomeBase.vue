<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <slot />
    <div>
      <NuxtLinkLocale class="text-sm btn m-3" to="index">
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  back: '@:global.back'
zh:
  back: '@:global.back'
</i18n>
