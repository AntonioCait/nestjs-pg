

## Description

/**
 * This is the README file for the Nest.js Playground project.
 It already has a database setup, only need to install docker postgres database
 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run docker db
```
$ docker run --name postgress-users -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=postgress-users -p 5432:5432 -d postgres
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


