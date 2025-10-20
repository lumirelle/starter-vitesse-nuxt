<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/modules/image'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toNuxtImagePage') }}</p>
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
  toNuxtImagePage: To `{'@'}nuxt/image` usecase >
  button: '@:global.go'
zh:
  toNuxtImagePage: 前往 `{'@'}nuxt/image` 用例 >
  button: '@:global.go'
fr:
  toNuxtImagePage: Aller à la utilisation de `{'@'}nuxt/image` >
  button: '@:global.go'
</i18n>
