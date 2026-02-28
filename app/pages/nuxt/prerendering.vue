<script lang="ts" setup>
defineRouteRules({
  prerender: true,
})
</script>

<template>
  <PageHomeBase>
    This is a prerendering page, which is generated at build time and served as a static HTML file.
    This is useful for improving SEO.
  </PageHomeBase>
</template>
