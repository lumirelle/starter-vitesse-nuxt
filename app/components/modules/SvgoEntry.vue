<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('modules-svgo'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toNuxtSvgoPage') }}</p>
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
  toNuxtSvgoPage: To `nuxt-svgo` usecase >
  button: '@:global.go'
zh:
  toNuxtSvgoPage: 前往 `nuxt-svgo` 用例 >
  button: '@:global.go'
fr:
  toNuxtSvgoPage: Aller à la utilisation de `nuxt-svgo` >
  button: '@:global.go'
</i18n>
