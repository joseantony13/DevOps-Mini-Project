# build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent
COPY public ./public
COPY src ./src
ARG REACT_APP_VERSION=dev
ENV REACT_APP_VERSION=$REACT_APP_VERSION
RUN npm run build

# production stage
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# copy a small nginx config (optional) — nginx default works fine
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

