export default defineEventHandler(event => Object.fromEntries(event.req.headers.entries()))
