import { gql } from 'apollo-server-express';

// Champs obligatoires !

// eslint-disable-next-line import/prefer-default-export
export const typeDefs = gql`
  scalar Time

  input InputEvent {
    title: String!
    theme: String!
    date: String!
    hour: String!
    author: String
    description: String!
    infos: String!
    image: String
  }

  input InputUser {
    firstname: String!
    lastname: String!
    email: String!
  }

  type User {
    _id: String
    firstname: String!
    lastname: String!
    email: String!
  }

  type Event {
    _id: String
    title: String
    theme: String
    date: String
    hour: String
    author: String
    description: String
    infos: String
    image: String
  }
  type Query {
    getUser(email: String): User
    getUsers: [User]
    getEvent(_id: String): Event
    getEvents: [Event]
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!, email: String!): User
    addEvent(input: InputEvent): Event
  }
`;
