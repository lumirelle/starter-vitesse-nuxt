FROM jdxcode/mise:latest AS build-stage

WORKDIR /app

COPY mise.toml mise.lock package.json bun.lock ./

RUN mise install

RUN mise deps

COPY . .
RUN mise run build

# SSR
FROM jdxcode/mise:latest AS production-stage

WORKDIR /app

COPY --from=build-stage /app/.output ./.output

EXPOSE 3000

CMD ["mise", "run", "start"]
