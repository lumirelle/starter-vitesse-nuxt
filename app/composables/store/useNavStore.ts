import { acceptHMRUpdate, defineStore } from 'pinia'

export const useNavStore = defineStore('nav', () => {
  const navData = ref<ApiNav.Nav>()

  /**
   * Fetch navigation data from an API or other sources.
   */
  async function fetchNavData(): Promise<void> {
    try {
      const { $api } = useNuxtApp()
      const res = await $api('/v1/nav')
      if (res.data) {
        navData.value = res.data
      }
      else {
        throw new Error('No data received from nav API')
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  return {
    navData,
    fetchNavData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavStore, import.meta.hot))
}
