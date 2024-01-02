# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

RUN npm run build

# Expose the port that your app will run on (assuming your Vite configuration uses port 3000)
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "dev"]
