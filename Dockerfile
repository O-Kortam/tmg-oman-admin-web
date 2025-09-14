# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# 2. Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy the necessary files for running
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Set env to production
ENV NODE_ENV=production

# Start the Next.js app
CMD ["npm", "start"]
