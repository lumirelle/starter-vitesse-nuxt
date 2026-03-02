/**
 * FIXME:
 *
 * By default, Nuxt will generate types for plugins, but in 4.1.3,
 * this behavior seems to be broken for some reason.
 *
 * So we manually declare the types for our $api plugin here.
 */

declare module '#app' {
  interface NuxtApp {
    $api: typeof globalThis.$fetch
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: typeof globalThis.$fetch
  }
}

// oxlint-disable-next-line unicorn/require-module-specifiers
export {}
