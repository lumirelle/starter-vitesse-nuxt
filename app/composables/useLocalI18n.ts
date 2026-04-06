/**
 * Use local i18n instance, provide a simple function syntax instead of specific parameter syntax.
 *
 * Equivalent to:
 *
 * ```ts
 * useI18n({ useScope: 'local' })
 * ```
 */
export function useLocalI18n() {
  return useI18n({ useScope: 'local' })
}
