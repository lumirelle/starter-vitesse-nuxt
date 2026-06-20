import { appDescription, appName, colorThemeDark, colorThemeLight } from './config/app'
import { SUPPORT_LOCALES } from './config/i18n'

export default defineNuxtConfig({
  /// keep-sorted
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@unocss/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],

  $test: {
    // We run tests via vitest & node runtime (bun does not support coverage yet),
    // so we need to set the nitro preset to node-server to avoid bundling issues.
    // Set preset here because vitest environment overrides are not applied to the
    // startup but only to the runtime.
    nitro: {
      preset: 'node-server',
    },
  },

  imports: {
    dirs: ['composables/repository/*'],
  },

  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },

  app: {
    head: {
      templateParams: { separator: '·' },
      meta: [
        // `favicon.ico`, `apple-touch-icon.png` are handled by `nuxt-seo-utils`
        // See https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules#seo-utils
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // See https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: colorThemeLight },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: colorThemeDark },
      ],
    },
  },

  css: ['~/assets/styles/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  site: {
    name: appName,
    description: appDescription,
  },

  colorMode: {
    // Better eyes!
    fallback: 'dark',
  },

  runtimeConfig: {
    EXAMPLE_PRIVATE_CONFIG: undefined,

    public: {
      EXAMPLE_PUBLIC_CONFIG: undefined,
    },
  },

  future: {
    compatibilityVersion: 5,
  },

  /**
   * @see https://github.com/nuxt/nuxt/blob/main/packages/schema/src/config/experimental.ts for default values
   */
  experimental: {
    inlineRouteRules: true,
    typedPages: true,
    typescriptPlugin: true,
  },

  compatibilityDate: '2026-06-20',

  nitro: {
    preset: 'bun',
  },

  vite: {
    optimizeDeps: {
      include: [
        '@antfu/utils',
        '@unhead/schema-org/vue',
        '@vueuse/core',
      ],
    },
  },

  a11y: {
    axe: {
      options: {
        rules: [
          { id: 'color-contrast', enabled: false },
        ],
      },
      runOptions: {},
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: { sortConfigKeys: true },
    },
  },

  i18n: {
    locales: SUPPORT_LOCALES,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      cookieKey: 'locale',
    },
    experimental: {
      typedOptionsAndMessages: 'all',
    },
  },

  image: {
    format: ['avif', 'webp'],
    /**
     * Enable image optimization on external websites.
     *
     * @see https://image.nuxt.com/get-started/configuration#domains
     */
    domains: [
      'images.unsplash.com',
      // ...
    ],
    alias: {
      unsplash: 'https://images.unsplash.com',
      // ...
    },
  },

  pwa: {
    // Disable service worker
    disable: true,
    manifest: {
      name: appName,
      short_name: appName,
      description: appDescription,
      theme_color: '#ffffff',
      icons: [
        { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: 'maskable-icon.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    },
  },

  robots: {
    blockNonSeoBots: true,
  },

  vueuse: {
    ssrHandlers: true,
  },
})
