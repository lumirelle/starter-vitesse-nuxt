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

/**
 * `useApi` uses `$api` under the hood.
 */
const { data: resUseApi } = await useApi('/api/request-headers', {
  key: 'useApi/request-headers',
})

const apiPath = ref('/api/request-headers')
const res = ref()

const { $api } = useNuxtApp()
async function doFetch() {
  /**
   * `$api` will automatically prefix the base URL, handle errors, forward headers, and support custom headers.
   */
  res.value = await $api(apiPath.value)
}
function clearResp() {
  res.value = null
}
</script>

<template>
  <div>
    <div>
      <div my-4>
        {{ t('respUseApi') }}
        <pre mt-4 p-4 text-left min-h-50 w-full overflow-x-auto bg="dark:#000">{{ resUseApi }}</pre>
      </div>
    </div>
    <div>
      <div>
        <span mr-2>API:</span>
        <input v-model="apiPath" class="input" type="text" :placeholder="t('inputPlaceholder')">
      </div>
      <div my-4>
        {{ t('resp') }}
        <pre mt-4 p-4 text-left min-h-50 w-full overflow-x-auto bg="dark:#000">{{ res }}</pre>
      </div>
      <div flex="~ gap-4 justify-center">
        <button class="btn" @click="doFetch">
          {{ t('makeRequest') }}
        </button>
        <button class="btn" @click="clearResp">
          {{ t('clearResp') }}
        </button>
      </div>
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
  resp: 'Response:'
  respUseApi: 'Response from useApi:'
  makeRequest: Make a custom fetch request
  clearResp: Clear Response
  inputPlaceholder: Enter api path to fetch
  back: '@:global.back'
zh:
  title: 自定义 Fetch
  resp: '响应:'
  respUseApi: 'useApi 的响应:'
  makeRequest: 发起自定义 fetch 请求
  clearResp: 清空响应
  inputPlaceholder: 请输入要请求的 API 路径
  back: '@:global.back'
</i18n>
