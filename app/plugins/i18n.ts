export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
    const dayjs = useDayjs()
    dayjs.locale(newLocale)
  })
})
