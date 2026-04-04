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
    // Vitesse colors, with transition on hover
    [/^(color|text|bg)-nuxt$/, ([, c]) => `${c}-green-400`],
    [/^(color|text|bg)-vite$/, ([, c]) => `${c}-purple-500`],
    [/^(color|text|bg)-vitesse$/, ([, c]) => `${c}-nuxt hover:${c}-vite transition-colors duration-200 ease-in-out`],
    [/^(color|text|bg)-vitesse-nuxt$/, ([, c]) => `hover:${c}-nuxt transition-colors duration-200 ease-in-out`],
    [/^(color|text|bg)-vitesse-vite$/, ([, c]) => `hover:${c}-vite transition-colors duration-200 ease-in-out`],
    // Components
    ['btn', 'px-4 py-1 rounded inline-block bg-vitesse text-white cursor-pointer select-none disabled:cursor-default disabled:opacity-50'],
    ['select', 'px-4 py-2 w-250px text-center *:bg-gray-100 dark:*:bg-gray-900 border border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none'],
    ['input', 'px-4 py-2 w-250px text-center bg-transparent border border-rounded border-gray-200 dark:border-gray-700 outline-none active:outline-none'],
  ],
})
