# Stage 1: Build
FROM node:16-alpine AS builder
WORKDIR /app
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
FROM node:16-alpine AS app
WORKDIR /app
COPY package*.json ./
RUN npm ci --production && npm cache clean --force && npm prune --production
COPY --from=builder /app/dist ./
EXPOSE 5000
# Run the container with a non-root User
USER node
CMD [ "node", "index.js" ]