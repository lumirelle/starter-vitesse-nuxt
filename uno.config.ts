import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    /**
     * Use fonts name directly, `@nuxt/font` will auto resolve the font resources from predefined providers.
     *
     * @see https://fonts.nuxt.com/get-started/usage#unocss
     */
    font: {
      sans: 'DM Sans',
      serif: 'DM Serif Display',
      mono: 'DM Mono',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['entry', 'p-8 w-600px bg-white dark:bg-black rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.15)] dark:shadow-[0_5px_15px_rgba(255,255,255,0.05)]'],
    ['select', 'px-4 py-2 w-250px text-center *:bg-gray-100 dark:*:bg-gray-900 border border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
