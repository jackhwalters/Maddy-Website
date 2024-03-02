# syntax=docker/dockerfile:1
FROM node:16.14.2-alpine as build

WORKDIR /home/node/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.16.0-alpine

COPY --from=build /home/node/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
