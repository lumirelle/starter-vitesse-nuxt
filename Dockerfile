FROM oven/bun:slim AS build-stage

WORKDIR /app

COPY .npmrc package.json bunfig.toml bun.lock ./
RUN --mount=type=cache,id=bun-store,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

COPY . .
RUN bun run build

# SSR
FROM oven/bun:slim AS production-stage

WORKDIR /app

COPY --from=build-stage /app/.output ./.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
