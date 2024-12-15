# Base image for Node.js
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the app files to the container
COPY app.js .
COPY package.json .

# Install any dependencies (none for this project)
RUN npm install

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
