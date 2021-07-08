# STRARIBAY PROJECT

## Database

In this project, we use mongodb. Don't forget to start your mongodb environment !

## DEVELOPMENT
### With docker

Run development environnement:

```
SERVER_PORT=YourServerPort JWT_SECRET=YourJWTsecret DB_NAME=virtualschool FRONT_PORT=YourFrontPort docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

### with NPM

in Front and Back directories

`npm i` for install all dependencies
`npm start` for start development environnement

Don't forget to create your `.env` file before ! (see them below)

## DEPLOYMENT

Run in production environnement:

```
GATEWAY_PORT=8000 docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

## ENVIRONMENT (if you don't use Docker)

Create `.env` file at the root of the backend project with the differente key:

```
  JWT_SECRET= your JWT secret
  DB_NAME= your DB name
  MONGO_ADDRESS= your mongo address
  MONGO_PORT= your mongo port
  SERVER_PORT= your server port
```

Create `.env` file at the root of the frontend project with the differente key:

```
  REACT_APP_BACK_URL= your back url
```
