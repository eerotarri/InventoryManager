# Builder vaihe
FROM node:20-alpine as builder

WORKDIR /app

# Kopioidaan package-tiedostot
COPY package*.json ./

# Asennetaan riippuvuudet
RUN npm install

# Kopioidaan lähdekoodi
COPY . .

# Käännetään sovellus
RUN npm run build

# Production vaihe
FROM nginx:alpine

# Kopioidaan rakennettu sovellus Nginxin HTML-kansioon
COPY --from=builder /app/dist /usr/share/nginx/html

# Kopioidaan mukautettu Nginx-konfiguraatio
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Palvelimen portti
EXPOSE 80

# Käynnistetään Nginx
CMD ["nginx", "-g", "daemon off;"]
