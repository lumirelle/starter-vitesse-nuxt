<script setup lang="ts">
const router = useRouter()

const localePath = useLocalePath()

function go() {
  router.push(localePath('/modules/swiper'))
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
  toNuxtSwiperPage: To `nuxt-swiper` usecase >
  button: '@:global.go'
zh:
  toNuxtSwiperPage: 前往 `nuxt-swiper` 用例 >
  button: '@:global.go'
fr:
  toNuxtSwiperPage: Aller à la utilisation de `nuxt-swiper` >
  button: '@:global.go'
</i18n>
