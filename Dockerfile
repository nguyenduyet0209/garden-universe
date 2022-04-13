# 1. Build
FROM node:14-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 --silent
COPY . .
RUN npm run build:prod
CMD [ "node" ]

# 2. Serve
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]
