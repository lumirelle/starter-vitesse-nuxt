<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('modules-dayjs'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toDayjsNuxtPage') }}</p>
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
  toDayjsNuxtPage: To `dayjs-nuxt` usecase >
  button: '@:global.go'
zh:
  toDayjsNuxtPage: 前往 `dayjs-nuxt` 用例 >
  button: '@:global.go'
fr:
  toDayjsNuxtPage: Aller à la utilisation de `dayjs-nuxt` >
  button: '@:global.go'
</i18n>
