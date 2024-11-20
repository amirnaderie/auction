FROM  node:22-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine3.20

# Overwriting nginx config with our own config file
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Copy over the build created in the Step 1
#COPY --from=builder /app/build /usr/share/nginx/html

# Set the working directory
#WORKDIR /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# Start nginx server
#CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
CMD ["nginx", "-g", "daemon off;"]


#docker build -t auction:0.0.1 .
#docker save auction > auction.0.0.1.tar