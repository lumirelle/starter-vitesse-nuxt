import { USER_SOURCE_ROUTE_QUERY_KEYS } from '~/constants/user-source'

export default defineNuxtPlugin({
  name: 'router:guards',
  setup() {
    const router = useRouter()

    router.beforeEach((to, from) => {
      console.info(`Routing from "${from.path}" to "${to.path}".`)
    })

    const { getUserSource, saveUserSource } = useUserSource()
    router.afterEach((to) => {
      const userSource = getUserSource()
      if (!userSource.value) {
        saveUserSource()
      }
      else if (USER_SOURCE_ROUTE_QUERY_KEYS.some(param => to.query[param])) {
        saveUserSource()
      }
    })
  },
})
