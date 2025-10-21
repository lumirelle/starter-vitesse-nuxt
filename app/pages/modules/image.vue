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
</script>

<template>
  <div>
    <!-- https://image.nuxt.com/usage/nuxt-img -->
    <figure class="mb-8">
      <NuxtImg
        src="/images/mountains_1.jpg"
        :placeholder="[30, 20]"
        width="300"
        height="200"
        class="rounded"
      />
      <figcaption class="text-xs text-gray-600 mt-3">
        <I18nT tag="span" keypath="photoBy">
          <template #author>
            <a
              href="https://unsplash.com/@vorosbenisop"
              target="_blank"
              class="underline"
            >Benjamin Voros</a>
          </template>
          <template #source>
            <a
              href="https://unsplash.com/s/photos/mountain"
              target="_blank"
              class="underline"
            >Unsplash</a>
          </template>
        </I18nT>
      </figcaption>
    </figure>
    <!-- https://image.nuxt.com/usage/nuxt-picture -->
    <figure>
      <NuxtPicture
        src="/images/mountains_2.jpg"
        width="3750"
        height="2500"
        sizes="xs:200px md:500px lg:1024"
      />
      <figcaption class="text-xs text-gray-600 mt-3">
        <I18nT tag="span" keypath="photoBy">
          <template #author>
            <a
              href="https://unsplash.com/@kydroon"
              target="_blank"
              class="underline"
            >Kurt Cotoaga</a>
          </template>
          <template #source>
            <a
              href="https://unsplash.com/s/photos/mountain"
              target="_blank"
              class="underline"
            >Unsplash</a>
          </template>
        </I18nT>
      </figcaption>
    </figure>

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
  title: Nuxt Image
  photoBy: 'Photo by {author} on {source}.'
  back: '@:global.back'
zh:
  title: Nuxt Image
  photoBy: '照片作者 {author}，来源于 {source}。'
  back: '@:global.back'
</i18n>
