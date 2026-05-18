FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 4000

CMD npx prisma migrate deploy --schema=prisma/schema.prisma && node dist/src/main.js
