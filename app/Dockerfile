# Base
FROM node:22-alpine

WORKDIR /app

# Copiar package.json y package-lock.json para instalar deps
COPY package*.json ./

RUN npm install

# Copiar el resto del código
COPY . .

# Puerto que usa Vite
EXPOSE 5173

# Comando para desarrollo
CMD ["npm", "run", "dev"]
