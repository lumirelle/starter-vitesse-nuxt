const startAt = Date.now()
let count = 0

export default defineEventHandler(() =>
  createServerResponse<ApiPageview.Pageview>({
    pageview: count++,
    startAt,
  }),
)
