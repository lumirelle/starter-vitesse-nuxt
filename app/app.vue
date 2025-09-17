<script lang="ts" setup>
import { appName } from './constants/app'

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
