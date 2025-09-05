# Multi-stage build for both applications
FROM node:18-alpine AS base

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Build main website
WORKDIR /app
COPY . .
RUN npm run build

# Build admin dashboard
WORKDIR /app/TrueNorthAdmin
COPY TrueNorthAdmin/package*.json ./
RUN npm ci --only=production
COPY TrueNorthAdmin/ .
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built applications
COPY --from=base /app/dist /usr/share/nginx/html
COPY --from=base /app/TrueNorthAdmin/dist /usr/share/nginx/html/admin-dashboard

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
