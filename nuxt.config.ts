import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    /**
     * FIXME: Cannot preview images with Nuxt Image in dev mode
     */
    '@nuxt/image',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
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
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
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
     * For example, if you want to use ipx with images stored in the `assets/images` folder, you can set the `dir`
     * option to `assets/images`.
     *
     * Notice that, there are some limitation for using non-public folders, please check the documentation for more
     * information.
     * @see https://image.nuxt.com/get-started/configuration#dir
     * @default 'public'
     */
    dir: 'public',

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
     * @example
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
