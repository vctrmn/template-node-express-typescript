# Boilerplate - Node.js Express Typescript

## Local development 

```
npm install
```
```
npm run dev
```

## Build Docker image

```
docker build . -t express-app:latest
```
```
docker run --rm -p 5001:5001 --name express-app express-app:latest
```