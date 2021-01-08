FROM node:14-alpine

RUN mkdir /app
WORKDIR /app
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src

RUN npm i

CMD npm start