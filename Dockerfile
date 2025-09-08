FROM node:20-slim

# Install system dependencies required for better-sqlite3
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    gcc \
    g++ \
    make \
    pkg-config \
    sqlite3 \
    libsqlite3-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
COPY server/package*.json ./server/
COPY TrueNorthAdmin/package*.json ./TrueNorthAdmin/

# Install dependencies
RUN npm ci
RUN cd TrueNorthAdmin && npm ci
RUN cd server && npm ci

# Copy application code
COPY . .

# Build application
RUN npm run build:main
RUN npm run build:admin
RUN npm run build:combine

# Expose port
EXPOSE 4173

# Start application
CMD ["node", "server.js"]