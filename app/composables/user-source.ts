import type { Nullable } from '@antfu/utils'

/**
 * Options for the `useUserSource` composable.
 */
export interface UseUserSourceOptions {
  /**
   * Cookie name to store the referer URL.
   *
   * @default 'referer'
   */
  refererCookieName?: string

  /**
   * Cookie name to store the target URL.
   *
   * @default 'target'
   */
  targetCookieName?: string
}

export interface UserSource {
  referer?: Nullable<string>
  target?: Nullable<string>
}

/**
 * Easily manage user source information (referer and target URLs) using cookies.
 *
 * @param options Options for configuring cookie names.
 * @returns An object containing methods to save and get user source information.
 */
export function useUserSource(options: UseUserSourceOptions = {}) {
  const refererCookie = useCookie(options.refererCookieName || 'referer')
  const targetCookie = useCookie(options.targetCookieName || 'target')

  function saveUserSource() {
    refererCookie.value = window.document.referrer
    targetCookie.value = window.location.href
    console.info(`Saved user source: ${JSON.stringify({ referer: refererCookie.value, target: targetCookie.value })}`)
  }

  function getUserSource() {
    const source = {
      referer: refererCookie.value,
      target: targetCookie.value,
    }
    return ref<Nullable<UserSource>>(!source.referer && !source.target ? null : source)
  }

  return {
    saveUserSource,
    getUserSource,
  }
}
