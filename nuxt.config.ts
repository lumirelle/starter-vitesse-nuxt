import { pwa } from './app/config/pwa'
import { appDescription, appName } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: appName,
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  colorMode: {
    /**
     * Suffix of the class added to `<html>` element.
     *
     * By default, the class will be `<value><suffix>`, e.g. `dark-mode`.
     *
     * Set suffix to an empty string to left `<value>` only for most common cases.
     *
     * There is also a option to set custom prefix called `classPrefix`.
     * @default '-mode'
     */
    classSuffix: '',
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  eslint: {
    config: {
      /**
       * Setup basic JavaScript, TypeScript and Vue plugins and rules.
       *
       * You might want to disable it when you are using other ESLint config that handles the basic setup.
       * @default true
       */
      standalone: false,
      /**
       * Additional options for Nuxt specific rules.
       */
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  i18n: {
    /**
     * Nuxt i18n module overrides Nuxt default routes to add locale prefixes to every URL (except in 'no_prefix'
     * strategy).
     * @default 'prefix_except_default'
     */
    strategy: 'prefix_except_default',

    /**
     * Required if using `prefix_except_default` strategy
     * @default ''
     */
    defaultLocale: 'en',
    /**
     * Available locales.
     *
     * To leverage the SEO benefits, you must configure the `locales` option, where each object has an `language` option
     * set to the locale language tags:
     *
     * ```ts
     * export default defineNuxtConfig({
     *   i18n: {
     *     locales: [
     *       { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
     *       { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr-FR.json' }
     *     ]
     *   }
     * })
     * ```ts
     *
     * You must also set the baseUrl option to your production domain in order to make alternate URLs fully-qualified:
     *
     * ```ts
     * export default defineNuxtConfig({
     *   i18n: {
     *     baseUrl: 'https://my-nuxt-app.com'
     *   }
     * })
     * ```
     */
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr-FR.json' },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      /**
       * The name of the cookie to use, when using `useCookie: true`
       *
       * You should use the name agreed upon with your backend if you have one.
       * @default 'i18n_redirected'
       */
      cookieKey: 'locale',
      /**
       * For better SEO, it's recommended to set redirectOn to root (which is the default value). When set, the language
       * detection is only attempted when the user visits the root path ('/') of the site. This allows crawlers to
       * access the requested page rather than being redirected away based on detected locale. It also allows linking to
       * pages in specific locales.
       * @default 'root'
       * @see https://i18n.nuxtjs.org/docs/guide/browser-language-detection
       */
      redirectOn: 'root',
    },

    /**
     * Base URL of your website. It is required to generate valid SEO tag links, such as hreflang tags.
     */
    baseUrl: 'http://localhost:3000',

    experimental: {
      /**
       * This is useful for generating types of global messages. Currently, it's not support component-level messages.
       * @default false
       * @see https://i18n.nuxtjs.org/docs/api/options#typedoptionsandmessages
       */
      typedOptionsAndMessages: 'all',
    },
  },

  image: {
    /**
     * The quality for the generated image(s).
     * @see https://image.nuxt.com/get-started/configuration#quality
     * @default 80
     */
    quality: 80,
    /**
     * Specify a value to work with DPR > 1 (these are devices with retina display and others). You must specify for
     * which DPR values you want to adapt images.
     *
     * Density values above 2 are not recommended. See https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio.
     * @see https://image.nuxt.com/get-started/configuration#densities
     * @default [1, 2]
     */
    densities: [1, 2],
    /**
     * You can use this option to configure the default format for your images used by <NuxtPicture>. If the format is
     * not specified, it will respect the default image format.
     *
     * `['avif', 'webp']` is recommended for common use cases.
     * @see https://image.nuxt.com/get-started/configuration#format
     * @default ['webp']
     */
    format: ['avif', 'webp'],
    /**
     * List of predefined screen sizes, share the same naming and sizes as Tailwind CSS, with the addition of xs and xxl
     * (for backwards compatibility).
     * @see https://image.nuxt.com/get-started/configuration#screens
     * @see https://tailwindcss.com/docs/responsive-design
     * @default The values below
     */
    screens: {
      'xs': 320, // Mobile start, another common value is 375 (iPhone 6/7/8/X)
      'sm': 640,
      'md': 768, // Pad start
      'lg': 1024, // Laptop start
      'xl': 1280, // Desktop start
      'xxl': 1536, // Large desktop start
      '2xl': 1536,
    },

    /**
     * Presets are collections of pre-defined configurations for your projects. Presets will help you to unify images
     * all over your project.
     * @see https://image.nuxt.com/get-started/configuration#presets
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
     * For example, if you want to use ipx with images stored in the `<srcDir>/assets/images` folder, you can set the `dir`
     * option to `assets/images`.
     *
     * Notice that, there are some limitation for using non-public folders, please check the documentation for more
     * information.
     *
     * Notice that, Nuxt 4 move default src directory from `<rootDir>` to `<rootDir>/app`, so if your images
     * are stored in the `<rootDir>/public` folder, you need to set the `dir` option to `../public` instead of `public`.
     * @see https://image.nuxt.com/get-started/configuration#dir
     * @see https://nuxt.com/docs/4.x/api/nuxt-config#srcdir
     * @see https://github.com/nuxt/image/blob/main/src/module.ts#L59
     * @see https://github.com/nuxt/image/issues/1956
     * @default 'public'
     */
    dir: '../public',

    /**
     * To enable image optimization on an external website, specify which domains are allowed to be optimized.
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

  pwa,
})
