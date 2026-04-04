<script lang="ts" setup>
const { t } = useI18n()
</script>

<template>
  <div>
    <slot />
    <div>
      <NuxtLinkLocale class="text-sm m-3 btn" to="index">
        {{ t('back') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
