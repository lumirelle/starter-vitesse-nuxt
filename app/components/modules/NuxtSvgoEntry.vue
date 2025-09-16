<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('modules-nuxt-svgo'))
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
  toNuxtSvgoPage: To `nuxt-svgo` page >
  button: GO
zh:
  toNuxtSvgoPage: 前往 `nuxt-svgo` 页面 >
  button: 前往
fr:
  toNuxtSvgoPage: Aller à la page `nuxt-svgo` >
  button: Aller
</i18n>
