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

# Create directories for SSL certificates
RUN mkdir -p /etc/ssl/certs /etc/ssl/private

# For production, you'll need to mount your actual SSL certificates
# Example: docker run -v /path/to/cert.pem:/etc/ssl/certs/cert.pem -v /path/to/key.pem:/etc/ssl/private/key.pem

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
