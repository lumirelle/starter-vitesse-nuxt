import { acceptHMRUpdate, defineStore } from 'pinia'

export interface Nav {
  items: Array<{ title: string, link: string }>
}

export const useNavStore = defineStore('nav', () => {
  const navData = ref<Nav>({
    items: [],
  })

  /**
   * This example fetch action should be called on app initialization to load the navigation data.
   *
   * For example, in `app.vue` or a layout component:
   *
   * @example
   *
   * ```ts
   * const navStore = useNavStore()
   * await callOnce('nav', () => navStore.fetchNavData())
   * ```
   *
   * If we want to fetch the data while each time the user navigates to a new page, we can set `mode` option to `'navigation'`
   *
   * @example
   *
   * ```ts
   * const navStore = useNavStore()
   * await callOnce('nav', () => navStore.fetchNavData()), { mode: 'navigation' })
   * ```
   *
   * @see https://pinia.vuejs.org/ssr/nuxt.html#Awaiting-for-actions-in-pages
   */
  const fetchNavData = async () => {
    setTimeout(() => {
      navData.value = {
        items: [
          { title: 'Home', link: '/' },
          { title: 'About', link: '/about' },
        ],
      }
    }, 1000)
  }

  return {
    navData,
    fetchNavData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavStore, import.meta.hot))
}
