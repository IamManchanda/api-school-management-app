# GraphQL API Back-end: School Managment App

GraphQL API Back-end Repository for School Managment App (TypeScript, Node & MongoDB).

## Installation

```bash
# setup
$ npm install
```

## Running the app (development)

1. Install MongoDB and add a `school` database on your local MongoDB Server. To use MongoDB Atlas instead of local database connection, please replace the URI from `mongodb://localhost/school` to your Atlas connection URL at `src/type-orm.config.ts`
1. Run one of the below commands, preferably `start:dev`
1. Visit GraphQL Playground [http://localhost:3000/graphql](http://localhost:3000/graphql) to run the API. Try running sample queries from `sample-queries` folder.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## GraphQL API Schema

Current GraphQL API Schema looks like this:

```gql
input AddStudentsToLessonInput {
  lessonId: ID!
  studentIds: [ID!]!
}

input CreateLessonInput {
  name: String!
  startDate: String!
  endDate: String!
  students: [ID!] = []
}

input CreateStudentInput {
  firstName: String!
  lastName: String!
}

type Lesson {
  id: ID!
  name: String!
  startDate: String!
  endDate: String!
  students: [Student!]!
}

type Mutation {
  createLesson(createLessonInput: CreateLessonInput!): Lesson!
  addStudentsToLesson(
    addStudentsToLessonInput: AddStudentsToLessonInput!
  ): Lesson!
  createStudent(createStudentInput: CreateStudentInput!): Student!
}

type Query {
  lessons: [Lesson!]!
  lesson(id: String!): Lesson!
  students: [Student!]!
  student(id: String!): Student!
}

type Student {
  id: ID!
  firstName: String!
  lastName: String!
}
```
