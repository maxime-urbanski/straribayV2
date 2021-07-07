# STRARIBAY PROJECT

## DEVELOPMENT

Run development environnement:

```
WEB_CLIENT_PORT=3000 API_PORT=4000 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

## DEPLOYMENT

Run in production environnement:

```
GATEWAY_PORT=8000 docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

## ENVIRONMENT

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
