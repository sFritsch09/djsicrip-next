# syntax=docker/dockerfile:1.7

# ---- deps ------------------------------------------------------------------
FROM --platform=linux/amd64 dhi.io/bun:1-alpine-dev AS deps
WORKDIR /app
COPY package.json bun.lock ./
# Persist bun's download cache across builds (BuildKit cache mount).
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

# ---- build -----------------------------------------------------------------
FROM --platform=linux/amd64 dhi.io/bun:1-alpine-dev AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# .next/cache holds the incremental compiler + image cache; keeping it between
# builds makes unchanged routes near-instant. It is NOT shipped in the image.
RUN --mount=type=cache,target=/app/.next/cache \
    bun run build

# ---- runtime ---------------------------------------------------------------
# Non-dev image: no shell, no package manager, ~half the size of *-dev.
FROM --platform=linux/amd64 dhi.io/node:26-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

# `output: "standalone"` already contains server.js, the traced node_modules,
# .next/server and the config. Only public/ and .next/static are not included
# and must be copied alongside.
COPY --from=builder --chown=65532:65532 /app/.next/standalone ./
COPY --from=builder --chown=65532:65532 /app/.next/static ./.next/static
COPY --from=builder --chown=65532:65532 /app/public ./public

USER 65532
EXPOSE 3000
CMD ["node", "server.js"]
