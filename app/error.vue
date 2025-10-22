<!-- This page is fork from built-in Nuxt error page, -->
<!-- you can customize it to fit your needs -->

<script setup lang="ts">
import type { NuxtError } from '#app'
import { useHead } from '#imports'

const props = defineProps<{
  error: NuxtError
}>()
useHead({
  title: `${props.error.statusCode} - ${props.error.statusMessage || 'Internal Server Error'}`,
  script: [
    {
      innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`,
    },
  ],
  style: [
    {
      innerHTML: `*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`,
    },
  ],
})
</script>

<template>
  <div class="text-black font-sans px-10 pt-12 bg-white flex flex-col min-h-screen antialiased dark:text-white dark:bg-[#020420]">
    <h1 class="text-6xl font-medium mb-4 sm:text-8xl" v-text="error.statusCode" /><p class="text-xl leading-tight font-light mb-8 sm:text-2xl" v-text="error.statusMessage" /><a href="https://nuxt.com/docs/4.x/getting-started/error-handling?utm_source=nuxt-error-dev-page" target="_blank" class="text-sm font-medium mx-auto underline-offset-3 inline-block top-6 absolute hover:text-[#00DC82] hover:underline sm:right-6">Customize this page</a><div class="border border-b-0 border-black/5 rounded-t-md bg-gray-50/50 flex-1 h-auto overflow-y-auto dark:border-white/10 dark:bg-white/5">
      <div class="text-xl leading-tight font-light p-8 z-10" v-html="error.stack" />
    </div>
  </div>
</template>

<style scoped>
.absolute {
  position: absolute;
}
.top-6 {
  top: 1.5rem;
}
.z-10 {
  z-index: 10;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.inline-block {
  display: inline-block;
}
.h-auto {
  height: auto;
}
.min-h-screen {
  min-height: 100vh;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-col {
  flex-direction: column;
}
.overflow-y-auto {
  overflow-y: auto;
}
.border {
  border-width: 1px;
}
.border-b-0 {
  border-bottom-width: 0;
}
.border-black\/5 {
  border-color: #0000000d;
}
.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}
.bg-gray-50\/50 {
  background-color: #f5f5f580;
}
.bg-white {
  --un-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--un-bg-opacity));
}
.p-8 {
  padding: 2rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.pt-12 {
  padding-top: 3rem;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-black {
  --un-text-opacity: 1;
  color: rgb(0 0 0 / var(--un-text-opacity));
}
.hover\:text-\[\#00DC82\]:hover {
  --un-text-opacity: 1;
  color: rgb(0 220 130 / var(--un-text-opacity));
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.leading-tight {
  line-height: 1.25;
}
.font-sans {
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
}
.hover\:underline:hover {
  text-decoration-line: underline;
}
.underline-offset-3 {
  text-underline-offset: 3px;
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (prefers-color-scheme: dark) {
  .dark\:border-white\/10 {
    border-color: #ffffff1a;
  }
  .dark\:bg-\[\#020420\] {
    --un-bg-opacity: 1;
    background-color: rgb(2 4 32 / var(--un-bg-opacity));
  }
  .dark\:bg-white\/5 {
    background-color: #ffffff0d;
  }
  .dark\:text-white {
    --un-text-opacity: 1;
    color: rgb(255 255 255 / var(--un-text-opacity));
  }
}
@media (min-width: 640px) {
  .sm\:right-6 {
    right: 1.5rem;
  }
  .sm\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .sm\:text-8xl {
    font-size: 6rem;
    line-height: 1;
  }
}
</style>
