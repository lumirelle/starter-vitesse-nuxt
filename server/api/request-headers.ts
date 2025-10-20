export default defineEventHandler((event) => {
  return getRequestHeaders(event)
})
