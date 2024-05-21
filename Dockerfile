
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Command to run your app
CMD ["node", "dist/migrate up"]
