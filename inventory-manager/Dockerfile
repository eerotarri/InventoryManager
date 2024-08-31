# Use an official Python runtime as the base image
FROM node:20.17

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY package.json .

# Install the required dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Build the application
RUN npm run build

# Specify the command to run when the container starts
CMD [ "npm", "run", "start" ]