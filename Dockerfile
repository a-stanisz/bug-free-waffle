FROM node:18.3-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install -g nodemon
RUN npm install

RUN mkdir ./src
COPY ./src ./src

ENTRYPOINT [ "npm", "start" ]
