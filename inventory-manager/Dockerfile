# Use an official Python runtime as the base image
FROM node:20.17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY package.json .

# Install the required dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
# Why do this when its just gonna use premade anyways?
# RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Specify the command to run when the container starts
CMD [ "npm", "run", "start" ]