# build image
FROM node:21-alpine AS builder
WORKDIR /app
RUN yarn set version stable
RUN corepack enable
COPY package.json yarn.lock ./
RUN echo "nodeLinker: node-modules" > .yarnrc.yml
RUN yarn install
COPY . .
RUN yarn build

# build output image
FROM node:21-alpine AS runner
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/yarn.lock ./
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./.next/standalone/public
RUN cp -r .next/static ./.next/standalone/.next/static
COPY --from=builder /app/next.config.js ./next.config.js
USER nextjs
EXPOSE 3000
CMD [ "node", ".next/standalone/server.js" ]