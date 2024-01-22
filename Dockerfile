# syntax=docker/dockerfile:1
FROM node:16.14.2-alpine

WORKDIR /home/node/app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npx", "serve", "-s", "build", "-p", "3000" ]