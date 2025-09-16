<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'pages.title.svgo',
})

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <IMyIcon />
    <div>
      <NuxtLinkLocale
        class="text-sm btn m-3"
        to="index"
      >
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  back: "Back"
zh:
  back: "返回"
fr:
  back: "Retour"
</i18n>
