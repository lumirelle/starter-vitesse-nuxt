// XXX(Lumirelle): Caution, intentional shared state accross requests here
// Do not use this in your real application.
const startAt = Date.now()
let count = 0

export default defineEventHandler(() =>
  createResponse<ApiPageviewV1.Pageview>({
    pageview: count++,
    startAt,
  }),
)
