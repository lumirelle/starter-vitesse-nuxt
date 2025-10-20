<script lang="ts" setup>
import { appName } from './constants/app'

/**
 * @see https://nuxtseo.com/docs/schema-org/api/use-schema-org
 */
useSchemaOrg([
  defineWebPage({
    name: appName,
  }),
  defineWebSite({
    name: appName,
  }),
  defineOrganization({
    name: appName,
    logo: '/icon.png',
  }),
])

/**
 * An example shows how to initialize a Pinia store when the app starts.
 */
const navStore = useNavStore()
await callOnce('nav', navStore.fetchNavData)
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
