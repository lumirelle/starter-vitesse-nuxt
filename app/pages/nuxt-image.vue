<script setup lang="ts">
definePageMeta({
  layout: 'home',
  title: 'pages.title.nuxtImage',
})

const { t } = useI18n({
  useScope: 'local',
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
      <NuxtLink
        class="text-sm btn m-3"
        to="/"
      >
        {{ t('back') }}
      </NuxtLink>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  photoBy: "Photo by {author} on {source}."
  back: "Back"
zh:
  photoBy: "照片作者 {author}，来源于 {source}。"
  back: "返回"
fr:
  photoBy: "Photo par {author} sur {source}."
  back: "Retour"
</i18n>
