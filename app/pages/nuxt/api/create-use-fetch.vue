<script setup lang="ts">
const { t } = useLocalI18n()

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
    <div space-y-8>
      <!-- Server-side request -->
      <div flex="~ col" gap-4>
        <h2 text-center>
          {{ t('server-side-request') }}
        </h2>
        <div flex gap-10 justify-center>
          <label>API
            <input value="/api/v1/request-headers" m="l-2" type="text" disabled input :placeholder="t('input-placeholder')">
          </label>
          <label>
            {{ t('method') }}
            <select value="POST" disabled select m="l-2">
              <option value="POST">POST</option>
            </select>
          </label>
        </div>
        <div grid cols-2 h-650px>
          <div code-block tabindex="0">
            <p code-label>
              {{ t('resp-use-fetch') }}
            </p>
            <pre code-pre>{{ resUseFetch ?? errorUseFetch }}</pre>
          </div>
          <div code-block tabindex="0">
            <p code-label>
              {{ t('resp-use-api') }}
            </p>
            <pre code-pre>{{ resUseApi ?? errorUseApi }}</pre>
          </div>
        </div>
      </div>
      <!-- Client-side request -->
      <div flex="~ col" gap-4>
        <h2 text-center>
          {{ t('client-side-request') }}
        </h2>
        <div flex gap-10 justify-center>
          <label>API
            <input v-model="apiPath" input m="l-2" type="text" :placeholder="t('input-placeholder')">
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
        <div grid cols-2 h-650px>
          <div code-block tabindex="0">
            <p code-label>
              {{ t('resp-fetch') }}
            </p>
            <pre code-pre>{{ resFetch }}</pre>
          </div>
          <div code-block tabindex="0">
            <p code-label>
              {{ t('resp-api') }}
            </p>
            <pre code-pre>{{ resApi }}</pre>
          </div>
        </div>
        <div flex gap-4 justify-center>
          <button class="btn" @click="doFetch">
            {{ t('make-request') }}
          </button>
          <button class="btn" @click="clearResp">
            {{ t('clear-resp') }}
          </button>
        </div>
      </div>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt API / createUseFetch
  server-side-request: Server-side Request
  client-side-request: Client-side Request
  resp-use-fetch: Response from useFetch
  resp-use-api: Response from useApi
  resp-fetch: Response from $fetch
  resp-api: Response from $api
  method: HTTP Method
  make-request: Make a custom fetch request
  clear-resp: Clear Response
  input-placeholder: Enter api path to fetch
zh:
  title: Nuxt API / createUseFetch
  server-side-request: 服务端请求
  client-side-request: 客户端请求
  resp-use-fetch: useFetch 的响应
  resp-use-api: useApi 的响应
  resp-fetch: $fetch 的响应
  resp-api: $api 的响应
  method: HTTP 方法
  make-request: 发起自定义 fetch 请求
  clear-resp: 清空响应
  input-placeholder: 请输入要请求的 API 路径
</i18n>
