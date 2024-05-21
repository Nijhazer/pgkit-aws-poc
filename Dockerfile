
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY src ./src
COPY migrations ./migrations
COPY tsconfig.json ./

RUN npm run build

CMD ["node", "dist/migrate.js", "up"]
