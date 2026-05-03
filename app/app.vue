<script lang="ts" setup>
// #region SEO configuration
/**
 * Schema.org configuration.
 * @see https://nuxtseo.com/docs/schema-org/guides/default-schema-org#configuring-your-defaults
 */
useSchemaOrg([
  defineWebSite(),
  defineWebPage(),
  defineOrganization(),
])

/**
 * OG Image configuration. Title and description will be inferred, this will be overridden by upstream pages that use different templates.
 */
defineOgImage('Page.takumi', {}, { alt: 'Vitesse Starter for Nuxt 4' })
// #endregion

// #region Global state initialization
/**
 * Initialize Pinia store when the app starts.
 */
const navStore = useNavStore()
await callOnce('nav', navStore.fetchNavData)
// #endregion
</script>

<template>
  <div min-h-screen>
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
