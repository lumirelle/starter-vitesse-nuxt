import { colorThemeDark, colorThemeLight } from './constants/app'

/**
 * XXX(Lumirelle): In Nitro 3 / Nuxt 5, `app.config.ts`, `defineAppConfig`, and `useAppConfig` seem no longer supported. Maybe we should prepare to migrate to a new way?
 */
export default defineAppConfig({
  colorThemeLight,
  colorThemeDark,
})
