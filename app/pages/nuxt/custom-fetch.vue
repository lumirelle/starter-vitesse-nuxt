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

// `useFetch` and `useApi`
const { data: resUseFetch, error: errorUseFetch } = await useFetch('/api/v1/request-headers', {
  key: 'useFetch/request-headers',
})
const { data: resUseApi, error: errorUseApi } = await useApi('/v1/request-headers', {
  key: 'useApi/request-headers',
})

// `$fetch` and `$api`
const apiPath = ref('/v1/request-headers')
const method = ref<'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'>('POST')
const resFetch = ref<unknown>()
const resApi = ref<unknown>()
const { $api } = useNuxtApp()
async function doFetch(): Promise<void> {
  resFetch.value = await $fetch(`/api${apiPath.value}`, { method: method.value })
  resApi.value = await $api(apiPath.value, { method: method.value })
}
function clearResp(): void {
  resFetch.value = null
  resApi.value = null
}
</script>

<template>
  <PageHomeBase>
    <!-- Server-side request -->
    <div>
      <div flex gap-10 justify-center>
        <label>API
          <input value="/api/v1/request-headers" m="l-2" type="text" disabled input :placeholder="t('inputPlaceholder')">
        </label>
        <label>
          {{ t('method') }}
          <select value="POST" disabled select m="l-2">
            <option value="POST">POST</option>
          </select>
        </label>
      </div>
      <div flex gap-4>
        <div my-4 flex-1>
          {{ t('respUseFetch') }}
          <pre mt-4 p-4 text-left min-h-50 w-full overflow-x-auto bg="dark:#000">{{ resUseFetch ?? errorUseFetch }}</pre>
        </div>
        <div my-4 flex-1>
          {{ t('respUseApi') }}
          <pre mt-4 p-4 text-left min-h-50 w-full overflow-x-auto bg="dark:#000">{{ resUseApi ?? errorUseApi }}</pre>
        </div>
      </div>
    </div>
    <!-- Client-side request -->
    <div>
      <div flex gap-10 justify-center>
        <label>API
          <input v-model="apiPath" input m="l-2" type="text" :placeholder="t('inputPlaceholder')">
        </label>
        <label>
          {{ t('method') }}
          <select v-model="method" select m="l-2">
            <option value="POST">POST</option>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="PATCH">PATCH</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
      </div>
      <div flex gap-4>
        <div my-4 flex-1>
          <div mb-4>
            {{ t('respFetch') }}
          </div>
          <pre mt-4 p-4 text-left min-h-50 w-full overflow-x-auto bg="dark:#000">{{ resFetch }}</pre>
        </div>
        <div my-4 flex-1>
          <div mb-4>
            {{ t('respApi') }}
          </div>
          <pre mt-4 p-4 text-left min-h-50 w-full overflow-x-auto bg="dark:#000">{{ resApi }}</pre>
        </div>
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
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Custom Fetch
  respUseFetch: Response from useFetch
  respUseApi: Response from useApi
  respFetch: Response from $fetch
  respApi: Response from $api
  method: HTTP Method
  makeRequest: Make a custom fetch request
  clearResp: Clear Response
  inputPlaceholder: Enter api path to fetch
  back: '@:global.back'
zh:
  title: 自定义 Fetch
  respUseFetch: useFetch 的响应
  respUseApi: useApi 的响应
  respFetch: $fetch 的响应
  respApi: $api 的响应
  method: HTTP 方法
  makeRequest: 发起自定义 fetch 请求
  clearResp: 清空响应
  inputPlaceholder: 请输入要请求的 API 路径
  back: '@:global.back'
</i18n>
