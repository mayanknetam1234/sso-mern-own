FROM node:18 AS builder

WORKDIR /app1

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built frontend files
COPY --from=builder /app1/dist /usr/share/nginx/html

# 🆕 Copy your custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]