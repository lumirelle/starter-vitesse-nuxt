<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'pages.title.nuxtSwiper',
})

const { t } = useI18n({
  useScope: 'local',
})

// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  // eslint-disable-next-line no-console
  console.log(swiper.instance)
})
</script>

<template>
  <div>
    <ClientOnly>
      <swiper-container ref="containerRef" m="t-4 b-4">
        <swiper-slide
          v-for="(slide, idx) in slides" :key="idx"
          flex="~ justify-center items-center" text-lg color-white font-bold
          bg-amber h-20vh
        >
          {{ t('slide', { number: idx + 1 }) }}
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
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
    <div>
      <NuxtLinkLocale
        class="text-sm btn m-3"
        to="index"
      >
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  slide: "Slide { number }"
  prev: "Prev"
  next: "Next"
  back: "Back"
zh:
  slide: "幻灯片 { number }"
  prev: "上一张"
  next: "下一张"
  back: "返回"
fr:
  slide: "Diapositive { number }"
  prev: "Précédent"
  next: "Suivant"
  back: "Retour"
</i18n>
