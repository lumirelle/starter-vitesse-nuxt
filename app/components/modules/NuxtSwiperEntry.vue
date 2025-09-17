<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('modules-nuxt-swiper'))
}

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <p>{{ t('toNuxtSwiperPage') }}</p>
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
  toNuxtSwiperPage: To `nuxt-swiper` page >
  button: GO
zh:
  toNuxtSwiperPage: 前往 `nuxt-swiper` 页面 >
  button: 前往
fr:
  toNuxtSwiperPage: Aller à la page `nuxt-swiper` >
  button: Aller
</i18n>
