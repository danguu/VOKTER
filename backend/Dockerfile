FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY tsconfig*.json ./
COPY . .
RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/dist ./dist
COPY --from=build /app/generated ./generated
COPY --from=build /app/prisma ./prisma

EXPOSE 4000

CMD npx prisma migrate deploy && node dist/src/main.js
