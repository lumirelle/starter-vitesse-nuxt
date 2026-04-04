import { USER_SOURCE_ROUTE_QUERY_KEYS } from '~/constants/user-source'

/**
 * Router plugins are used to apply extra logic after route changes, to apply logic before route changes, please use route middleware instead.
 *
 * @see [track.global.ts](../middleware/track.global.ts)
 */
export default defineNuxtPlugin(() => {
  const router = useRouter()
  const { getUserSource, saveUserSource } = useUserSource()
  router.afterEach((to) => {
    const userSource = getUserSource()
    if (!userSource.value || USER_SOURCE_ROUTE_QUERY_KEYS.some(key => to.query[key])) {
      saveUserSource()
      // oxlint-disable-next-line no-console
      console.info('User source is saved!', userSource.value)
    }
  })
})
