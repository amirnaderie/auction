FROM  node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Expose the port the app runs on
EXPOSE 80

# Start the application
CMD ["npm", "start"]


#docker build -t auction:0.0.1 .
#docker save auction > auction.0.0.1.tar