# 2. Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy the necessary files for running
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]
