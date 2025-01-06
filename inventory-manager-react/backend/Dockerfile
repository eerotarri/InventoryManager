# Backend Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files with verbose logging
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 8000

# Start the server
CMD ["npm", "start"]