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
  <PageHomeBase :title="t('title')">
    <!-- Server-side request -->
    <div mb-8>
      <h2 mb-4 text-center>
        {{ t('server-side-request') }}
      </h2>
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
      <div grid grid-cols-2 h-650px>
        <div code-block>
          <p code-label>
            {{ t('respUseFetch') }}
          </p>
          <pre code-pre>{{ resUseFetch ?? errorUseFetch }}</pre>
        </div>
        <div code-block>
          <p code-label>
            {{ t('respUseApi') }}
          </p>
          <pre code-pre>{{ resUseApi ?? errorUseApi }}</pre>
        </div>
      </div>
    </div>
    <!-- Client-side request -->
    <div>
      <h2 mb-4 text-center>
        {{ t('client-side-request') }}
      </h2>
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
      <div grid grid-cols-2 h-650px>
        <div code-block>
          <p code-label>
            {{ t('respFetch') }}
          </p>
          <pre code-pre>{{ resFetch }}</pre>
        </div>
        <div code-block>
          <p code-label>
            {{ t('respApi') }}
          </p>
          <pre code-pre>{{ resApi }}</pre>
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
  title: Nuxt API / createUseFetch
  server-side-request: Server-side Request
  client-side-request: Client-side Request
  respUseFetch: Response from useFetch
  respUseApi: Response from useApi
  respFetch: Response from $fetch
  respApi: Response from $api
  method: HTTP Method
  makeRequest: Make a custom fetch request
  clearResp: Clear Response
  inputPlaceholder: Enter api path to fetch
zh:
  title: Nuxt API / createUseFetch
  server-side-request: 服务端请求
  client-side-request: 客户端请求
  respUseFetch: useFetch 的响应
  respUseApi: useApi 的响应
  respFetch: $fetch 的响应
  respApi: $api 的响应
  method: HTTP 方法
  makeRequest: 发起自定义 fetch 请求
  clearResp: 清空响应
  inputPlaceholder: 请输入要请求的 API 路径
</i18n>
