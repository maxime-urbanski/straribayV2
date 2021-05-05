"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Champs obligatoires !
// eslint-disable-next-line import/prefer-default-export
exports.typeDefs = apollo_server_express_1.gql `
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
//# sourceMappingURL=type.js.map