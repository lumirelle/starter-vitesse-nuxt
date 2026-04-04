import type {
  PresetWind4Theme,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig<PresetWind4Theme>({
  presets: [
    /**
     * Tailwind CSS v4 only supports modern browsers. If you need to support legacy browsers, please use `presetWind3` instead.
     *
     * @see https://tailwindcss.com/docs/compatibility
     */
    presetWind4(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        public: FileSystemIconLoader('./public/icons'),
      },
      processor(props, meta) {
        if (meta.collection === 'public') {
          let { width = 1, height = 1 } = props
          if (typeof width === 'string')
            width = Number.parseInt(width)
          if (typeof height === 'string')
            height = Number.parseInt(height)
          const min = Math.min(width, height)
          props.width = `${Math.round((width / min) * 100) / 100}em`
          props.height = `${Math.round((height / min) * 100) / 100}em`
        }
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],

  theme: {
    colors: {
      nuxt: '#00dc82',
      vite: '#a454ff',
    },
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
  rules: [
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (typeof theme.colors?.[c] === 'string')
        return { color: theme.colors[c] }
    }],
  ],
  shortcuts: [
    // Vitesse colors, with transition on hover
    ['bg-vitesse', 'bg-nuxt hover:bg-vite transition-colors duration-200 ease-in-out'],
    ['text-vitesse', 'text-nuxt hover:text-vite transition-colors duration-200 ease-in-out'],
    // Components
    ['btn', 'px-4 py-1 rounded inline-block bg-vitesse text-white cursor-pointer select-none disabled:cursor-default disabled:opacity-50'],
    ['select', 'px-4 py-2 w-250px text-center *:bg-gray-100 dark:*:bg-gray-900 border border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none'],
    ['input', 'px-4 py-2 w-250px text-center bg-transparent border border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none'],
  ],
})
