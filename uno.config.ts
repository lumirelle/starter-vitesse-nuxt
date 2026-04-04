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
    // Nuxt & Vite colors
    [/^(bg|text|decoration|border|fill|stroke)-(nuxt|vite)$/, ([, prefix, suffix]) => {
      const color = suffix === 'nuxt' ? 'green-400' : 'purple-500'
      return `${prefix}-${color}`
    }],
    // Vitesse colors, use Nuxt color for normal state, Vite color for hover state, with transition on hover
    [/^(bg|text|decoration|border|fill|stroke)-vitesse$/, ([, prefix]) => {
      return `${prefix}-nuxt hover:${prefix}-vite transition-colors duration-200 ease-in-out`
    }],
    // Vitesse colors with specific states
    [/^(bg|text|decoration|border|fill|stroke)-vitesse-(nuxt|vite)$/, ([, prefix, suffix]) => {
      return `hover:${prefix}-${suffix} transition-colors duration-200 ease-in-out`
    }],
    // Controls
    ['btn', 'px-4 py-1 rounded inline-block bg-vitesse text-white cursor-pointer select-none disabled:cursor-default disabled:opacity-50'],
    // FIXME(Lumirelle): How to customize the native select element?
    ['select', 'px-4 py-2 min-w-250px text-center bg-transparent outline-none border rounded border-gray-200 hover:border-vitesse-nuxt focus:border-nuxt dark:border-gray-800 disabled:cursor-not-allowed disabled:opacity-50'],
    ['input', 'px-4 py-2 min-w-250px text-center bg-transparent outline-none border rounded border-gray-200 hover:border-vitesse-nuxt focus:border-nuxt dark:border-gray-800 disabled:cursor-not-allowed disabled:opacity-50'],
    // Code blocks
    ['code-block', 'm-4 p-4 border border-black/5 rounded-md bg-gray-50/50 flex-1 h-auto overflow-y-auto dark:border-white/10 dark:bg-white/5'],
    ['code-label', 'text-lg font-bold mb-4'],
    ['code-pre', 'text-lg leading-tight'],
  ],
})
