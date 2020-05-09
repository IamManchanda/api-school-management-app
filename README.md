# API Back-end: School Managment App

API Back-end Repository for School Managment App (GraphQL, TypeScript, Node & MongoDB).

## Installation

```bash
# setup
$ npm install
```

## Running the app (development)

1. Install MongoDB and add a `school` database on your local MongoDB Server. To use MongoDB Atlas instead of local database connection, please replace the URI from `mongodb://localhost/school` to your Atlas connection URL at `src/type-orm.config.ts`
1. Run one of the below commands, preferably `start:dev`
1. Visit GraphQL Playground `http://localhost:3000/graphql` to test the API. Try running sample queries from `sample-queries` folder.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
