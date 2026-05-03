const startAt = Date.now()
let count = 0

export default defineEventHandler(() =>
  createResponse<ApiPageview.Pageview>({
    pageview: count++,
    startAt,
  }),
)
