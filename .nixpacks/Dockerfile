FROM nixos/nix

# Install system dependencies
RUN apk add --no-cache \
    python3 \
    g++ \
    make \
    gcc \
    pkgconfig \
    sqlite-dev

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/
COPY TrueNorthAdmin/package*.json ./TrueNorthAdmin/

# Install dependencies
RUN npm install
RUN cd server && npm install
RUN cd TrueNorthAdmin && npm install

# Copy application code
COPY . .

# Build application
RUN npm run build

EXPOSE 4173
CMD ["node", "server.js"]
