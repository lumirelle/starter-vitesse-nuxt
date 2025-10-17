export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('i18n:beforeLocaleSwitch', ({ newLocale }) => {
    console.info(`Switching locale to: ${newLocale}`)
    const dayjs = useDayjs()
    dayjs.locale(newLocale)
  })
})
