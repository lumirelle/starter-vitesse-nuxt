import type { KnipConfig } from 'knip'

export default {
  entry: [
    './app/**/*.{ts,vue}',
    './server/**/*.{ts,vue}',
    './test/**/*.{ts,vue}',
    './shared/**/*.ts',
  ],
  ignoreFiles: ['taze.config.ts'],
  ignoreDependencies: [
    // Icons.
    '@iconify-json/*',

    // Frontend libraries.
    '@takumi-rs/core',
    '@vueuse/core',
    'vue-router',

    // We uses their types, but we don't import them directly.
    'nitropack',
    'ofetch',

    // Code quality tools.
    '@lumirelle/oxlint-config',
    '@unocss/eslint-config',
    'vue-tsc',

    // Dependencies manager.
    'taze',
  ],
} satisfies KnipConfig
