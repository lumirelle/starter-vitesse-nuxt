import type { KnipConfig } from 'knip'

export default {
  entry: [
    './app/**/*.{ts,vue}',
    './server/**/*.{ts,vue}',
    './test/**/*.{ts,vue}',
    './shared/**/*.ts',
  ],
  ignoreFiles: [
    // TODO(Lumirelle): Create a pull request to add taze plugin for knip.
    'taze.config.ts',
  ],
  ignoreDependencies: [
    // We uses their types, but we don't import them directly
    'nitropack',
    'ofetch',

    // Frontend libraries
    '@takumi-rs/core',
    '@vueuse/core',
    'vue-router',

    // Icons
    '@iconify-json/*',

    // Serve tools
    'serve',

    // Check tools
    '@lumirelle/oxlint-config',
    '@unocss/eslint-config',
    'vue-tsc',

    // Dependencies manager
    'taze',
  ],
} satisfies KnipConfig
