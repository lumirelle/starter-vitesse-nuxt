<script lang="ts" setup>
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
</script>

<template>
  <div min-h-screen>
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
