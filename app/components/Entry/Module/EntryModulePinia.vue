<script setup lang="ts">
const name = ref('')

const { t } = useLocalI18n()
</script>

<template>
  <EntryBase :usecase="t('usecase')" url="https://pinia.vuejs.org/introduction.html" :button="{ route: { path: `/hi/${name}` } }">
    <div text-center>
      <label>{{ t('please') }}&nbsp;&nbsp;<input id="input" v-model="name" :placeholder="t('placeholder')" type="text" autocomplete="off" my-4 input></label>
    </div>
  </EntryBase>
</template>

<i18n lang="yaml">
en:
  usecase: Pinia
  please: Please
  placeholder: Enter your name!
zh:
  usecase: Pinia
  please: 请
  placeholder: 输入您的姓名！
</i18n>
