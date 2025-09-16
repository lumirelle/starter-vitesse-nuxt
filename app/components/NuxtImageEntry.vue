<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/nuxt-image'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div mb-4 mt-4 pb-4 pt-4>
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
  toNuxtImagePage: To `nuxt-image` page >
  button: GO
zh:
  toNuxtImagePage: 前往 `nuxt-image` 页面 >
  button: 前往
fr:
  toNuxtImagePage: Aller à la page `nuxt-image` >
  button: Aller
</i18n>
