FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy server and frontend files
COPY server.js ./
COPY public ./public

# Expose port 80
EXPOSE 80

# Start the server
CMD ["node", "server.js"]