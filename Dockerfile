# Stage 1: Build
FROM node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY .eslintrc.json ./
COPY tsconfig.json ./
COPY ./src ./src
COPY ./test ./test
# Run unit test
RUN npm run test
RUN npx eslint . --fix && npx tsc -p . 

# Stage 3: Run the build
FROM node:lts-alpine
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production && npm cache clean --force && npm prune --production
COPY --from=builder /usr/src/app/dist ./
EXPOSE 5000
# Run the container with a non-root User
USER node
CMD ["dumb-init", "node", "index.js"]