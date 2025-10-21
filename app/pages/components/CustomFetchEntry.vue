<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/modules/custom-fetch'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toCustomFetchPage') }}</p>
    <div>
      <button
        text-sm btn m-3
        @click="go"
      >
        {{ t('button') }}
      </button>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  toCustomFetchPage: To custom fetch usecase >
  button: '@:global.go'
zh:
  toCustomFetchPage: 前往自定义 fetch 用例 >
  button: '@:global.go'
</i18n>
