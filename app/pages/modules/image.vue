<script setup lang="ts">
const { t } = useLocalI18n()

useHead({
  title: t('title'),
})
</script>

<template>
  <PageHomeBase :title="t('title')">
    <div flex="~ col" gap-8>
      <!-- https://image.nuxt.com/usage/nuxt-img -->
      <figure flex="~ col" items-center>
        <NuxtImg
          src="/images/mountains_1.jpg"
          :placeholder="[30, 20]"
          width="300"
          height="200"
          class="rounded"
        />
        <I18nT tag="figcaption" keypath="photo-by" text="xs gray-600" mt-3>
          <template #author>
            <a href="https://unsplash.com/@vorosbenisop" target="_blank" class="underline">Benjamin Voros</a>
          </template>
          <template #source>
            <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>
          </template>
        </I18nT>
      </figure>
      <!-- https://image.nuxt.com/usage/nuxt-picture -->
      <figure flex="~ col" items-center>
        <NuxtPicture
          src="/images/mountains_2.jpg"
          width="1200"
          height="500"
        />
        <I18nT tag="figcaption" keypath="photo-by" text="xs gray-600" mt-3>
          <template #author>
            <a href="https://unsplash.com/@kydroon" target="_blank" class="underline">Kurt Cotoaga</a>
          </template>
          <template #source>
            <a href="https://unsplash.com/s/photos/mountain" target="_blank" class="underline">Unsplash</a>
          </template>
        </I18nT>
      </figure>
    </div>
  </PageHomeBase>
</template>

<i18n lang="yaml">
en:
  title: Image
  photo-by: 'Photo by {author} on {source}.'
zh:
  title: 图片
  photo-by: '照片作者 {author}，来源于 {source}。'
</i18n>
