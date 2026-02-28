<script setup lang="ts">
/**
 * @credits Nuxt SEO <https://nuxtseo.com/>
 */

import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    colorMode?: 'dark' | 'light'
    title?: string
    description?: string
    isPro?: boolean
    width?: number
    height?: number
  }>(),
  {
    colorMode: 'light',
    title: 'title',
    width: 1200,
    height: 630,
  },
)

const themeColor = computed(() => (props.isPro ? '124, 58, 237' : '34, 197, 94'))
</script>

<template>
  <div
    class="text-neutral-900 p-10 bg-white flex flex-col h-full w-full items-center justify-center relative dark:text-neutral-50 lg:p-[60px] dark:bg-neutral-900"
  >
    <!-- Gradient background -->
    <div
      class="bottom-0 left-0 right-0 top-0 absolute"
      :style="{
        backgroundImage: `radial-gradient(at 100% 100%, rgba(${themeColor}, 0.15), transparent)`,
      }"
    />
    <div
      class="bottom-0 left-0 right-0 top-0 absolute"
      :style="{
        backgroundImage: `radial-gradient(at 0% 0%, rgba(${themeColor}, 0.1), transparent)`,
      }"
    />

    <div class="text-center flex flex-col gap-5 items-center relative lg:gap-8">
      <!-- Logo -->
      <div class="flex gap-3 items-center">
        <svg viewBox="0 0 64 64" class="h-10 w-10 lg:h-16 lg:w-16">
          <defs>
            <linearGradient :id="isPro ? 'nsLine2' : 'nsLine1'" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" :stop-color="isPro ? '#7c3aed' : '#22c55e'" />
              <stop offset="100%" :stop-color="isPro ? '#c4b5fd' : '#86efac'" />
            </linearGradient>
            <linearGradient :id="isPro ? 'nsFill2' : 'nsFill1'" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" :stop-color="isPro ? '#7c3aed' : '#22c55e'" stop-opacity="0.6" />
              <stop offset="100%" :stop-color="isPro ? '#7c3aed' : '#22c55e'" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M8 52 Q20 48 24 36 T40 20 T56 12 L56 56 L8 56 Z"
            :fill="`url(#${isPro ? 'nsFill2' : 'nsFill1'})`"
          />
          <path
            d="M8 52 Q20 48 24 36 T40 20 T56 12"
            fill="none"
            :stroke="`url(#${isPro ? 'nsLine2' : 'nsLine1'})`"
            stroke-width="4"
            stroke-linecap="round"
          />
          <circle cx="56" cy="12" r="6" :fill="`url(#${isPro ? 'nsLine2' : 'nsLine1'})`" />
        </svg>
        <span class="text-[32px] tracking-tight font-bold lg:text-[42px]">
          Nuxt<span :class="isPro ? 'text-violet-500' : 'text-green-500'" class="ml-2"
            >SEO{{ isPro ? ' Pro' : '' }}</span
          >
        </span>
      </div>

      <div class="w-full items-center justify-center">
        <!-- Title -->
        <h1
          class="text-[48px] leading-tight font-bold m-0 max-w-[700px] lg:text-[80px] lg:max-w-[1000px]"
          style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance"
        >
          {{ title }}
        </h1>
      </div>

      <!-- Description -->
      <p
        v-if="description"
        class="text-[24px] leading-relaxed opacity-70 max-w-[650px] lg:text-[32px] lg:max-w-[900px]"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
