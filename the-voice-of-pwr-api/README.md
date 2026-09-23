# The Voice Of PWR Backend

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project local setup

```bash
npm install
```

Remember to add the .env file with the appropriate parameters.

### Seeding the database

```bash
npx prisma generate
npx prisma migrate dev
npx run seed:dev
```

### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage after setup

Remember to always check for github changes before starting.

```bash
# Update
git fetch origin
git pull origin
npm install
npx prisma migrate dev

# And then run
npm run start:dev
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
