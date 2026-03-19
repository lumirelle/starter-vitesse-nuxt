import type { KnipConfig } from 'knip'

export default {
  /// keep-sorted
  entry: [
    'app/**/*.{ts,vue}',
    'shared/types/**/*',
  ],
  /// keep-sorted
  ignoreDependencies: [
    '@iconify-json/*',
    '@lumirelle/oxlint-config',
    '@takumi-rs/core',
    '@unocss/eslint-config',
    '@vitest/coverage-v8',
    '@vueuse/core',
    'dayjs',
    'vitest-environment-nuxt',
    'vue-router',
    'vue-tsc',
  ],
} satisfies KnipConfig
