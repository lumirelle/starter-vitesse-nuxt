export default defineNuxtPlugin({
  name: 'dayjs:i18n',
  hooks: {
    'i18n:beforeLocaleSwitch': ({ newLocale }) => {
      console.info(`Switching locale to: ${newLocale}`)
      const dayjs = useDayjs()
      dayjs.locale(newLocale)
    },
  },
})
