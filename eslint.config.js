// @ts-check
import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    // Use `oxfmt`
    stylistic: false,
    unocss: true,
  },
  /**
   * Don't forget to set `standalone: false` in your Nuxt ESLint module options.
   */
  nuxt(),
  ...oxlint.configs['flat/recommended'],
)
  .override('antfu/perfectionist/setup', {
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          environment: 'bun',
          groups: [
            'type-import',
            ['type-parent', 'type-sibling', 'type-index', 'type-internal'],
            'value-builtin',
            'value-external',
            'value-internal',
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect',
            'ts-equals-import',
            'unknown',
          ],
          newlinesBetween: 'ignore',
          newlinesInside: 'ignore',
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  })
  .override('antfu/vue/rules', {
    rules: {
      'vue/html-indent': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-self-closing': 'off',
    },
  })
  .append({
    name: 'lumirelle/javascript/rules',
    rules: {
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    },
  })
