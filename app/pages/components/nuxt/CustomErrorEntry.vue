<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/nuxt/custom-error'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toCustomErrorPage') }}</p>
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
  toCustomErrorPage: To custom error usecase >
  button: '@:global.go'
zh:
  toCustomErrorPage: 前往自定义 error 用例 >
  button: '@:global.go'
</i18n>
