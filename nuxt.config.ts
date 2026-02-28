import { pwa } from './app/config/pwa'
import { appDescription, appName } from './app/constants/app'

export default defineNuxtConfig({
  // @keep-sorted
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-echarts',
    'nuxt-qrcode',
    'nuxt-swiper',
    'nuxt-typed-router',
  ],

  devtools: {
    enabled: true,
    timeline: { enabled: true },
  },

  app: {
    head: {
      title: appName,
      viewport: 'width=device-width,initial-scale=1',
      templateParams: { separator: '·' },
      meta: [
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  /**
   * Shared config for SEO modules integrated by `nuxt-seo`.
   *
   * @see https://nuxtseo.com/docs/site-config/api/config
   */
  site: { name: appName },

  /**
   * Runtime configuration.
   *
   * They can be overridden by corresponding environment variables.
   */
  runtimeConfig: {
    public: {
      BASE_URL: '',
    },
  },

  devServer: {
    port: 3000,
    /**
     * Listen all the addresses of your machine (both IPv4 and IPv6).
     *
     * Listen on `::` just like listen on `0.0.0.0`, but with additional IPv6 support.
     *
     * This can extremely improve the performance of accessing via `localhost` on some systems (e.g. Windows).
     */
    host: '::',
  },

  future: {
    /**
     * Include the future features.
     *
     * @see https://nuxt.com/blog/v4-2#opt-in-vite-environment-api
     */
    compatibilityVersion: 5,
  },

  /**
   * Control experimental features.
   *
   * @see https://github.com/nuxt/nuxt/blob/main/packages/schema/src/config/experimental.ts for default values
   */
  experimental: {
    /**
     * When using `nuxt generate`, payload js assets included in sw precache manifest, but missing on offline, disabling
     * extraction it until fixed.
     *
     * @see https://nuxt.com/docs/4.x/guide/going-further/experimental-features#payloadextraction
     */
    payloadExtraction: false,
    /**
     * Allow defining `routeRules` inside page components using `defineRouteRules`.
     */
    inlineRouteRules: true,
  },

  compatibilityDate: '2026-02-28',

  nitro: {
    preset: 'bun',
  },

  dayjs: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    defaultTimezone: 'Asia/Shanghai',
    /**
     * Register Day.js plugins.
     *
     * @default ['relativeTime', 'utc']
     * @see https://day.js.org/docs/zh-CN/plugin/plugin
     */
    // @keep-sorted
    plugins: ['advancedFormat', 'localizedFormat', 'relativeTime', 'timezone', 'utc'],
  },

  /**
   * Register charts, components, and features used in ECharts.
   *
   * They are still dynamically imported when needed.
   */
  echarts: {
    // @keep-sorted
    charts: ['BarChart', 'LineChart', 'MapChart', 'PieChart'],
    // @keep-sorted
    components: [
      'DatasetComponent',
      'GeoComponent',
      'GridComponent',
      'LegendComponent',
      'ToolboxComponent',
      'TooltipComponent',
      'VisualMapComponent',
    ],
    // @keep-sorted
    features: ['LabelLayout', 'UniversalTransition'],
  },

  eslint: {
    config: {
      /**
       * Only include Nuxt specific linting rules.
       *
       * @default true
       */
      standalone: false,
      /**
       * Additional options for generating Nuxt specific rules.
       */
      nuxt: { sortConfigKeys: true },
    },
  },

  i18n: {
    /**
     * I18n module will generate locale routes based on the existing routes, this option controls the strategy for how to prefix route names.
     *
     * `prefix_except_default` is the most common choice, which will only prefix non-default locale routes.
     *
     * @default 'prefix_except_default'
     */
    strategy: 'prefix_except_default',
    /**
     * Available locales.
     *
     * To leverage the SEO benefits, you must configure the `language` option for each locale, which will be set to the `lang` attribute of `<html>` tag.
     */
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      /**
       * For Chinese, it should be expressed with a script subtag instead of a region subtag. So we use `Hans` (for Simplified) and `Hant` (for Traditional) as recommended by BCP 47.
       *
       * @see https://en.wikipedia.org/wiki/IETF_language_tag#ISO_3166-1_and_UN_M.49
       */
      { code: 'zh', language: 'zh-Hans', name: '简体中文', file: 'zh-Hans.json' },
    ],
    /**
     * Required if using `prefix_except_default` strategy.
     *
     * @default ''
     */
    defaultLocale: 'en',
    /**
     * Options about whether/how to detect the user's browser language.
     */
    detectBrowserLanguage: {
      /**
       * You should use the key name agreed upon with the backend.
       *
       * @default 'i18n_redirected'
       */
      cookieKey: 'locale',
    },
    experimental: {
      /**
       * Type support for options and messages.
       *
       * Currently, it's not support component-level messages.
       *
       * @default false
       * @see https://i18n.nuxtjs.org/docs/api/options#typedoptionsandmessages
       */
      typedOptionsAndMessages: 'all',
    },
  },

  image: {
    /**
     * The default format for your images used by <NuxtPicture>.
     *
     * If default image format is also not specified, it will fallback to the legacy format.
     *
     * `['avif', 'webp']` is recommended for common use cases.
     *
     * @see https://image.nuxt.com/get-started/configuration#format
     * @see https://image.nuxt.com/usage/nuxt-picture#legacyformat
     * @default ['webp']
     */
    format: ['avif', 'webp'],
    /**
     * Presets are collections of pre-defined image configurations for your projects.
     *
     * You can use it in `<NuxtImg>` and `<NuxtPicture>` component via `preset` prop.
     *
     * @see https://image.nuxt.com/get-started/configuration#presets
     * @see https://image.nuxt.com/usage/nuxt-img#preset
     */
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 48,
          height: 48,
          fit: 'cover',
        },
      },
      logo: {
        modifiers: {
          format: 'webp',
          width: 200,
          height: 80,
          fit: 'cover',
        },
      },
    },
    /**
     * Enable image optimization on external websites.
     *
     * @see https://image.nuxt.com/get-started/configuration#domains
     * @default undefined
     */
    domains: ['images.unsplash.com'],
    /**
     * Aliases for src.
     *
     * This is especially useful for optimizing external src URLs.
     *
     * @example
     *
     * Before:
     *
     * _src/xxx.vue_
     *
     * ```vue
     * <NuxtImg src="https://images.unsplash.com/<id>" />
     * ```
     *
     * _dist/xxx.html_
     *
     * ```html
     * <img src="/_ipx/https://images.unsplash.com/<id>">
     * ```
     *
     * After:
     *
     * _src/xxx.vue_
     *
     * ```vue
     * <NuxtImg src="/unsplash/<id>" />
     * ```
     *
     * _dist/xxx.html_
     *
     * ```html
     * <img src="/_ipx/unsplash/<id>">
     * ```
     *
     * @see https://image.nuxt.com/get-started/configuration#alias
     */
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },

  /**
   * Configurations for PWA (Progressive Web App).
   */
  pwa,

  /**
   * Helps you to manage `robots.txt` rules.
   *
   * This module has out-of-box i18n support, all allowed/disallowed paths have different locales are respected.
   *
   * @see https://nuxtseo.com/docs/robots/guides/i18n
   */
  robots: {
    /**
     * Blocks bots that don't benefit our SEO and are known to cause issues.
     *
     * @default false
     * @see https://github.com/nuxt-modules/robots/blob/main/src/const.ts#L6
     */
    blockNonSeoBots: true,
  },

  vueuse: {
    /**
     * Better SSR support.
     *
     * @experimental
     * @see https://github.com/vueuse/vueuse/blob/main/packages/nuxt/ssr-plugin.mjs
     */
    ssrHandlers: true,
  },
})
