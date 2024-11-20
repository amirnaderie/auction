# FROM node:18

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD npm run dev

# Use the official Node.js image as the base image
# FROM node:18-alpinedocker
FROM node:18.20.4-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install


#RUN npm install -g prisma

# Copy the rest of the application code
COPY . .

# Generate Prisma client
#RUN npx prisma generate

# # Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 443

# Start the application
CMD ["npm", "start"]
# CMD npm run dev

#docker build -t auction:0.0.1 .
#docker save auction > auction.0.0.1.tar