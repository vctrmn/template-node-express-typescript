# Stage 1: Build
FROM node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY .eslintrc.json ./
COPY tsconfig.json ./
COPY ./src ./src
RUN npm run lint && npm run build

# Stage 2: Run App
FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /usr/src/app/dist ./
# Run the container with a non-root User
USER node
CMD ["node", "index.js"]