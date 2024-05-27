FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm install -g vite
COPY ./ .
RUN vite build
EXPOSE 5174