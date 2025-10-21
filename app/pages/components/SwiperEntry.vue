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
  toNuxtSwiperPage: To Swiper usecase >
  button: '@:global.go'
zh:
  toNuxtSwiperPage: 前往轮播图用例 >
  button: '@:global.go'
</i18n>
