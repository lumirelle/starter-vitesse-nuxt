import process from 'node:process'
import { appDescription, appName, colorThemeDark, colorThemeLight } from './app/constants/app'

export default defineNuxtConfig({
  /// keep-sorted
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
  ],

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

  site: {
    name: appName,
    description: appDescription,
  },

  runtimeConfig: {
    public: {
      XXX_API_KEY: undefined,
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
    /**
     * Temporarily workaround before migrating to the new API.
     */
    nitroAutoImports: true,
  },

  compatibilityDate: '2026-03-13',

  nitro: {
    preset: 'bun',
  },

  vite: {
    optimizeDeps: {
      include: [
        '@antfu/utils',
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
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      /**
       * For Chinese, it should be expressed with a script subtag instead of a region subtag. So we use `Hans` (for Simplified) and `Hant` (for Traditional) as recommended by BCP 47.
       *
       * @see https://en.wikipedia.org/wiki/IETF_language_tag#ISO_3166-1_and_UN_M.49
       */
      { code: 'zh', language: 'zh-Hans', name: '简体中文', file: 'zh-Hans.json' },
      // ...
    ],
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
    presets: {
      avatar: {
        modifiers: { format: 'webp', width: 48, height: 48, fit: 'cover' },
      },
      logo: {
        modifiers: { format: 'webp', width: 200, height: 80, fit: 'cover' },
      },
      // ...
    },
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
    registerType: 'autoUpdate',
    manifest: {
      id: '/',
      scope: '/',
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
    workbox: {
      globPatterns: ['**/*.{js,css,html,txt,png,ico,svg}'],
      navigateFallbackDenylist: [/^\/api\//],
      navigateFallback: '/',
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    registerWebManifestInRouteRules: true,
    writePlugin: true,
    devOptions: {
      enabled: process.env.VITE_PLUGIN_PWA === 'true',
      navigateFallback: '/',
    },
  },

  robots: {
    blockNonSeoBots: true,
  },

  vueuse: {
    ssrHandlers: true,
  },
})
