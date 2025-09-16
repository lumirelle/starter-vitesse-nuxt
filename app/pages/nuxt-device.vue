<script lang="ts" setup>
definePageMeta({
  layout: 'home',
  title: 'pages.title.nuxtDevice',
})

const { isDesktop, isMobile, isTablet, isIos, isWindows, isMacOS, isAndroid } = useDevice()
</script>

<template>
  <div>
    <p>Is this device <span text-fuchsia>Desktop?</span> <span text-amber>{{ isDesktop }}</span></p>
    <p>Is this device <span text-fuchsia>Mobile?</span> <span text-amber>{{ isMobile }}</span></p>
    <p>Is this device <span text-fuchsia>Tablet?</span> <span text-amber>{{ isTablet }}</span></p>
    <p>Is this device <span text-fuchsia>Ios?</span> <span text-amber>{{ isIos }}</span></p>
    <p>Is this device <span text-fuchsia>Windows?</span> <span text-amber>{{ isWindows }}</span></p>
    <p>Is this device <span text-fuchsia>MacOS?</span> <span text-amber>{{ isMacOS }}</span></p>
    <p>Is this device <span text-fuchsia>Android?</span> <span text-amber>{{ isAndroid }}</span></p>
  </div>
</template>
