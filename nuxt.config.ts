import { pwa } from './app/config/pwa'
import { appDescription, appName } from './app/constants/app'
import { DEV_SERVER_HOST, DEV_SERVER_PORT } from './app/constants/dev-server'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
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
    'nuxt-svgo',
    'nuxt-swiper',
    'nuxt-typed-router',
  ],

  /**
   * Exclude `components/` directory from `pages/` directory scanning.
   */
  pages: {
    pattern: ['**/*.vue', '!**/components/**'],
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: appName,
      viewport: 'width=device-width,initial-scale=1',
      templateParams: {
        separator: '·',
      },
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
  site: {
    name: appName,
  },

  colorMode: {
    /**
     * Color mode will add current color mode as a class to `<html>` element, e.g. `class="light"` or `class="dark"`,
     * this option allows to customize the suffix of the class name.
     *
     * Set this option to an empty string in order to support third-party CSS frameworks like Tailwind CSS or UnoCSS.
     *
     * There is also another option named `classPrefix`, which is used to customize the prefix of the class name.
     *
     * @default '-mode'
     */
    classSuffix: '',
  },

  /**
   * Define runtime configuration that is exposed to the client-side.
   *
   * These will be automatically replaced by matching environment variables.
   */
  runtimeConfig: {
    public: {
      BASE_URL: '',
    },
  },

  devServer: {
    port: DEV_SERVER_PORT,
    /**
     * Listen both IPv4 and IPv6 for all interfaces (including localhost).
     *
     * For example, you have two interfaces. The first one has IPv4 address `192.168.1.100` and IPv6 address `fe80::1`,
     * another one has IPv4 address `172.16.0.1` and IPv6 address `fe80::2`, then the dev server will listen on:
     *
     * - `127.0.0.1`
     * - `::1`
     * - `192.168.1.100`
     * - `fe80::1`
     * - `172.16.0.1`
     * - `fe80::2`
     *
     * Why should we do this?
     *
     * By default, Windows resolves `localhost` to IPv6 address `::1` (IPv6 loopback) first, then to IPv4 address
     * `127.0.0.1`. If we only listen on IPv4 address, it may cause slow response to the dev server.
     */
    host: DEV_SERVER_HOST,
  },

  experimental: {
    /**
     * When using `nuxt generate`, payload js assets included in sw precache manifest, but missing on offline, disabling
     * extraction it until fixed.
     *
     * @see https://nuxt.com/docs/4.x/guide/going-further/experimental-features#payloadextraction
     */
    payloadExtraction: false,
    /**
     * Allow defining `routeRules` directly within your `~/pages` directory using `defineRouteRules`.
     *
     * Rules are converted (based on the path) and applied for server requests. For example, a rule defined in
     * `~/pages/foo/bar.vue` will be applied to `/foo/bar` requests. A rule in `~/pages/foo/[id].vue` will be applied to
     * `/foo/**` requests. For more control, such as if you are using a custom path or alias set in the page's
     * definePageMeta, you should set `routeRules` directly within your `nuxt.config`.
     */
    inlineRouteRules: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    /**
     * Prerender specific routes (actually, it generates static HTML files for the routes) while `nuxt build` or `nuxt
     * generate`.
     *
     * @see https://nuxt.com/docs/4.x/getting-started/prerendering
     */
    prerender: {
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  dayjs: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    defaultTimezone: 'Asia/Shanghai',
    /**
     * Day.js plugins to load.
     *
     * @default ['relativeTime', 'utc']
     * @see https://day.js.org/docs/zh-CN/plugin/plugin
     */
    plugins: ['relativeTime', 'utc', 'timezone', 'localizedFormat'],
  },

  echarts: {
    /**
     * Register the charts used by `<VChart>` (dynamic imported only if `<VChart>` is used).
     */
    charts: ['LineChart', 'BarChart', 'MapChart', 'PieChart'],
    /**
     * Register the charts used by `<VChart>` (dynamic imported only if `<VChart>` is used).
     */
    components: [
      'DatasetComponent',
      'GridComponent',
      'TooltipComponent',
      'ToolboxComponent',
      'LegendComponent',
      'GeoComponent',
      'VisualMapComponent',
    ],
    /**
     * Register the features used by `<VChart>` (dynamic imported only if `<VChart>` is used).
     */
    features: ['LabelLayout', 'UniversalTransition'],
  },

  eslint: {
    config: {
      /**
       * Disable to generate only Nuxt specific rules.
       *
       * We use `@antfu/ni` to handles other rules.
       *
       * @default true
       */
      standalone: false,
      /**
       * Additional options for generating Nuxt specific rules.
       */
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  i18n: {
    /**
     * I18n module will generate locale routes based on the existing routes, this option controls the strategy for how
     * to prefix route names.
     *
     * `prefix_except_default` is the most common choice, which will only prefix non-default locale routes.
     *
     * @default 'prefix_except_default'
     */
    strategy: 'prefix_except_default',
    /**
     * Available locales.
     *
     * To leverage the SEO benefits, you must configure the `language` option for each locale, which will be set to the
     * `lang` attribute of `<html>` tag.
     */
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      /**
       * For Chinese, it should be expressed with a script subtag instead of a region subtag. So we use `Hans` (for
       * Simplified) or `Hant` (for Traditional) as recommended by BCP 47.
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
      useCookie: true,
      /**
       * The name of the cookie to use.
       *
       * You should use the name agreed upon with your backend if you have one.
       *
       * @default 'i18n_redirected'
       */
      cookieKey: 'locale',
    },
    experimental: {
      /**
       * This is useful for generating types of global messages. Currently, it's not support component-level messages.
       *
       * @default false
       * @see https://i18n.nuxtjs.org/docs/api/options#typedoptionsandmessages
       */
      typedOptionsAndMessages: 'all',
    },
  },

  image: {
    /**
     * The quality for the generated image(s).
     *
     * @see https://image.nuxt.com/get-started/configuration#quality
     * @default 80
     */
    quality: 80,
    /**
     * You can use this option to configure the default format for your images used by <NuxtPicture>. If the format is
     * not specified, it will respect the default image format.
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
     * List of predefined screen sizes, share the same naming and sizes as Tailwind CSS, with the addition of `xs` and
     * `xxl` (for backwards compatibility).
     *
     * @see https://image.nuxt.com/get-started/configuration#screens
     * @see https://tailwindcss.com/docs/responsive-design
     * @default The values below
     */
    screens: {
      'xs': 320, // Additional
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536, // Additional
    },
    /**
     * Presets are collections of pre-defined configurations for your projects.
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
     * This option allows you to specify the location of the source images when using the ipx or ipxStatic provider.
     *
     * For example, if you want to use ipx with images stored in the `<srcDir>/assets/images` folder, you can set the
     * `dir` option to `assets/images`. There are some limitation for using non-public folders, please check the
     * documentation for more information.
     *
     * Notice that, Nuxt 4 move default `srcDir` from `<rootDir>` to `<rootDir>/app`, and this module use `srcDir` as
     * the base directory, so if your images are stored in the `<rootDir>/public` folder, you need to set the `dir`
     * option to `../public` instead of `public`.
     *
     * @see https://image.nuxt.com/get-started/configuration#dir
     * @see https://nuxt.com/docs/4.x/api/nuxt-config#srcdir
     * @see https://github.com/nuxt/image/blob/main/src/module.ts#L59
     * @see https://github.com/nuxt/image/issues/1956
     * @default 'public'
     */
    dir: '../public',
    /**
     * To enable image optimization on an external website, specify which domains are allowed to be optimized.
     *
     * @see https://image.nuxt.com/get-started/configuration#domains
     * @default undefined
     */
    domains: [
      'images.unsplash.com',
    ],
    /**
     * This option allows you to specify aliases for src.
     *
     * When using the default ipx provider, URL aliases are shortened on the server-side. This is especially useful for
     * optimizing external URLs and not including them in HTML.
     *
     * When using other providers, aliases are resolved in runtime and included in HTML. (only the usage is simplified)
     *
     * Below is an example for the case of using ipx provider:
     *
     * Before using alias:
     *
     * ```html
     * <NuxtImg src="https://images.unsplash.com/<id>" />
     * ```
     *
     * Generated:
     *
     * ```html
     * <img src="/_ipx/https://images.unsplash.com/<id>">
     * ```
     *
     * After using alias:
     *
     * ```html
     * <NuxtImg src="/unsplash/<id>" />
     * ```
     *
     * Generated:
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

  linkChecker: {
    /**
     * If you don't want to check url link validation, you can disable this module.
     */
    enabled: true,
    /**
     * Skip specific inspections by their names.
     *
     * @see https://nuxtseo.com/docs/link-checker/guides/rules
     */
    skipInspections: [
      'link-text',
    ],
  },

  /**
   * For futher usage, please refer to the official documentation:
   *
   * @see https://nuxtseo.com/docs/og-image/getting-started/introduction
   */
  ogImage: {
    /**
     * If your don't need it, you can disable this module.
     */
    enabled: true,
    /**
     * Support non-English characters in OG image.
     */
    fonts: [
      'Noto+Sans+SC:400',
      'Noto+Sans+SC:700',
      'Work+Sans:ital:400',
    ],
  },

  pwa,

  /**
   * This module has out-of-box support for i18n support, all allowed/disallowed paths have different locales will be
   * recognized and generated automatically.
   *
   * @see https://nuxtseo.com/docs/robots/guides/i18n
   */
  robots: {
    /**
     * If your project maintains `/robots.txt` manually, you can disable this module.
     */
    enabled: true,
    /**
     * Blocks bots that don't benefit our SEO and are known to cause issues.
     *
     * @default false
     * @see https://github.com/nuxt-modules/robots/blob/main/src/const.ts#L6
     */
    blockNonSeoBots: true,
    /**
     * Allow paths to be indexed for the `*` user-agent (all robots).
     *
     * Customize to fit your needs.
     */
    allow: ['/sitemap.xml'],
    /**
     * Disallow paths to be indexed for the `*` user-agent (all robots).
     *
     * Customize to fit your needs.
     */
    disallow: ['/personal-center'],
    /**
     * Custom groups of rules for specific user agents.
     */
    groups: [
      {
        userAgent: ['AdsBot-Google-Mobile', 'AdsBot-Google-Mobile-Apps'],
        disallow: ['/admin'],
        allow: ['/admin/login'],
        /**
         * @see https://nuxtseo.com/docs/robots/guides/robots-txt#content-signals
         */
        contentUsage: ['ai=n', '/docs/ train-ai=y'],
        comment: ['Allow Google AdsBot to index the login page but no-admin pages'],
      },
    ],
  },

  /**
   * This module exports a composable `useSchemaOrg` to manage `schema.org` data, see examples in:
   *
   * @see {@link app/app.vue}
   */
  schemaOrg: {
    /**
     * If your project maintains `schema.org` data manually, you can disable this module.
     *
     * @default true
     */
    enabled: true,
  },

  /**
   * This module will generate `sitemap.xml` automatically based on your routes.
   *
   * You can also configure dynamic routes via Nitro runtime hooks or custom endpoints.
   *
   * @see https://nuxtseo.com/docs/sitemap/guides/data-sources#application-sources
   * @see https://nuxtseo.com/docs/sitemap/guides/data-sources#_3-dynamic-sources-using-nitro-hooks
   * @see https://nuxtseo.com/docs/sitemap/guides/dynamic-urls#_2-creating-custom-endpoints
   */
  sitemap: {
    /**
     * If your project maintains `/sitemap.xml` manually, you can disable this module.
     */
    enabled: true,
  },

  svgo: {
    /**
     * Configure the auto import path for SVG icons. This path is relative to the `srcDir`.
     *
     * @default './assets/icons/'
     */
    autoImportPath: './assets/icons/',
    /**
     * Svg component prefix, e.g. `your-icon.svg` -> `<i-your-icon />`.
     *
     * @default 'svgo'
     */
    componentPrefix: 'i',
    /**
     * Use a custom component name instead of the built-in `NuxtIcon` component with more cleaner implementation.
     *
     * @default 'NuxtIcon' (module built-in)
     */
    customComponent: 'VitesseIcon',
    /**
     * When importing a SVG component in TypeScript, you will get a "Cannot find module" error. In order to fix this,
     * you should enable dts option in the module config.
     *
     * @see https://github.com/cpsoinos/nuxt-svgo#usage-with-typescript
     */
    dts: true,
  },

  vueuse: {
    /**
     * Maybe can support SSR better.
     *
     * @experimental
     * @see https://github.com/vueuse/vueuse/blob/main/packages/nuxt/ssr-plugin.mjs
     */
    ssrHandlers: true,
  },
})
