FROM  node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine3.20

COPY --from=build /app/build /usr/share/nginx/html 
# Copy the Nginx configuration file 
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start nginx server
#CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
CMD ["nginx", "-g", "daemon off;"]


#docker build -t auction:0.0.1 .
#docker save auction > auction.0.0.1.tar