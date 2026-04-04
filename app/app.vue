<script lang="ts" setup>
/**
 * @see https://nuxtseo.com/docs/schema-org/guides/default-schema-org#configuring-your-defaults
 */
useSchemaOrg([
  defineWebSite(),
  defineWebPage(),
  defineOrganization(),
])

/**
 * An example shows how to initialize a Pinia store when the app starts.
 */
const navStore = useNavStore()
await callOnce('nav', navStore.fetchNavData)
</script>

<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}
</style>
