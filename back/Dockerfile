FROM node:14-alpine

ARG MONGO_ADDRESS=mongodb
ARG MONGO_PORT=27017

ENV MONGO_ADDRESS=${MONGO_ADDRESS}
ENV MONGO_PORT=${MONGO_PORT}

WORKDIR /app
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src

RUN npm i

CMD ["npm", "start"]
