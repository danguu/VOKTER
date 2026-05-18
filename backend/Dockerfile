FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY prisma.config.ts ./
COPY prisma ./prisma
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 4000

CMD ./node_modules/.bin/prisma migrate deploy && npx tsx prisma/seed.ts && node dist/src/main.js
