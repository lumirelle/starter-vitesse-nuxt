<script setup lang="ts">
const name = ref('')

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <EntryBase :title="t('title')" :button="[{ text: t('button-text'), path: `/hi/${name.trim()}` }]">
    <input
      id="input"
      v-model="name"
      :placeholder="t('placeholder')"
      type="text"
      autocomplete="off"
      my-4
      input
    />
  </EntryBase>
</template>

<i18n lang="yaml">
en:
  title: To Pinia usecase >
  placeholder: Enter your name
  button-text: '@:global.go'
zh:
  title: 前往 Pinia 用例 >
  placeholder: 请输入您的姓名
  button-text: '@:global.go'
</i18n>
