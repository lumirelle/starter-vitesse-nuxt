<script lang="ts" setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead()
/**
 * Use `route.meta.title` as i18n key to provide locale SEO title.
 *
 * If `route.meta.title` is not set, use the default title from i18n key `layouts.title.home`.
 *
 * Additional: This syntax is amiming to use `t` function with default value:
 *
 * ```ts
 * t(<key>, <defaultValue>)
 * ```
 *
 * In the case above, if `<key>` is not found, it will return `<defaultValue>`.
 *
 * Notice that, `<key>` can not be null or undefined, otherwise it will throw error: "Invalid arguments".
 */
const title = computed(() => t(route.meta.title as string ?? 'TBD', t('layouts.title.home')),
)
</script>

<template>
  <!-- `head.htmlAttrs.lang` is coming from `language` option defined in `i18n` field in `nuxt.config.ts` -->
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <!-- Locale title -->
      <Title>{{ title }}</Title>
      <!-- TODO: Locale links & meta, are they auto generated and should we configure them? -->
      <template v-for="link in head.link" :key="link.key">
        <Link :id="link.key" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.key">
        <Meta :id="meta.key" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <main class="px-10 py-20 text-center">
        <slot />
        <Footer />
        <div class="text-sm mx-auto mt-5 text-center opacity-25">
          [Home Layout]
        </div>
      </main>
    </Body>
  </Html>
</template>
