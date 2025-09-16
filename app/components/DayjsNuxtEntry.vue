<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/dayjs-nuxt'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div mb-4 mt-4 pb-4 pt-4>
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
  toDayjsNuxtPage: To `dayjs-nuxt` page >
  button: GO
zh:
  toDayjsNuxtPage: 前往 `dayjs-nuxt` 页面 >
  button: 前往
fr:
  toDayjsNuxtPage: Aller à la page `dayjs-nuxt` >
  button: Aller
</i18n>
