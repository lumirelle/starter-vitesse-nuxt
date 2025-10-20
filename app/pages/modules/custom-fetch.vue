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

await useApi('/api/request-headers', {
  key: 'useApi/request-headers',
})

const apiPath = ref('/api/request-headers')
const res = ref()

const { $api } = useNuxtApp()
async function doFetch() {
  res.value = await $api(apiPath.value)
}
</script>

<template>
  <div>
    <div>
      <input v-model="apiPath" class="input" type="text" :placeholder="t('inputPlaceholder')">
      <pre text-left>
        {{ res }}
      </pre>
      <button class="btn" @click="doFetch">
        {{ t('makeRequest') }}
      </button>
    </div>
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
  title: Custom Fetch
  makeRequest: Make a custom fetch request
  inputPlaceholder: Enter api path to fetch
  back: '@:global.back'
zh:
  title: 自定义 Fetch
  makeRequest: 发起自定义 fetch 请求
  inputPlaceholder: 请输入要请求的 API 路径
  back: '@:global.back'
fr:
  title: Fetch Personnalisé
  makeRequest: Faire une requête fetch personnalisée
  inputPlaceholder: Entrez le chemin de l'API à récupérer
  back: '@:global.back'
</i18n>
