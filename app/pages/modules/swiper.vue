<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('title'),
})

const containerRef = ref(null)
const swiper = useSwiper(containerRef)
// Create 10 slides
const slides = ref(Array.from({ length: 10 }))

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.info(swiper.instance)
})
</script>

<template>
  <PageHomeBase>
    <VitesseClientOnly>
      <!-- Web Component -->
      <swiper-container ref="containerRef" m="t-4 b-4">
        <swiper-slide
          v-for="(slide, idx) in slides" :key="idx"
          flex="~ justify-center items-center" text-lg color-white font-bold
          bg-amber h-20vh
        >
          {{ t('slide', { number: idx + 1 }) }}
        </swiper-slide>
      </swiper-container>
    </VitesseClientOnly>
    <div flex="~ justify-center gap-4">
      <!-- Go back one slide -->
      <button btn @click="swiper.prev()">
        {{ t('prev') }}
      </button>
      <!-- Go forward one slide -->
      <button btn @click="swiper.next()">
        {{ t('next') }}
      </button>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Nuxt Swiper
  slide: 'Slide { number }'
  prev: Prev
  next: Next
zh:
  title: Nuxt Swiper
  slide: '幻灯片 { number }'
  prev: 上一张
  next: 下一张
</i18n>
