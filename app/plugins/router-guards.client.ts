import { USER_SOURCE_ROUTE_QUERY_KEYS } from '~/constants/user-source'

export default defineNuxtPlugin({
  name: 'router:guards',
  setup() {
    const router = useRouter()

    router.beforeEach((to, from) => {
      // oxlint-disable-next-line no-console
      console.info(`Routing from "${from.path}" to "${to.path}".`)
    })

    const { getUserSource, saveUserSource } = useUserSource()
    router.afterEach((to) => {
      const userSource = getUserSource()
      if (!userSource.value || USER_SOURCE_ROUTE_QUERY_KEYS.some(key => to.query[key])) {
        saveUserSource()
      }
    })
  },
})
