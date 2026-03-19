export default defineNuxtPlugin({
  name: 'dayjs:i18n',
  hooks: {
    'i18n:beforeLocaleSwitch': ({ newLocale }) => {
      // oxlint-disable-next-line no-console
      console.info(`Switching locale to: ${newLocale}`)
      const dayjs = useDayjs()
      dayjs.locale(newLocale)
    },
  },
})
