FROM node:lts-alpine
WORKDIR /app
COPY app .
RUN apk add --no-cache git &&\
    npm install --production  &&\
    apk del git
ENTRYPOINT ["node", "./application.js"]
