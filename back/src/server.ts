import express from 'express';
import mongoose, { Document } from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import User from './models/User';
import Event from './models/Event';

const app = express();
const port = 7777;
app.use(cors());

const typeDefs = gql`
  scalar Time
  input InputUser {
    firstname: String
    lastname: String
    email: String
  }

  input InputEvent {
    title: String
    theme: String
    date: String
    hour: String
    author: String
    description: String
    infos: String
    image: String
  }

  type User {
    _id: String
    firstname: String
    lastname: String
    email: String
  }

  type Event {
    _id: String
    title: String
    theme: String
    date: Time
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
    addEvent(
      title: String!
      date: String
      hour: String!
      author: String
      description: String
      infos: String
      image: String
      theme: String
    ): Event
  }
`;
interface InputEvent extends Document {
  title: string;
  theme: string;
  date: string;
  hour: string;
  author?: string;
  description: string;
  infos: string;
  image: string;
}
interface InputUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
}

const resolvers = {
  Query: {
    getUser: async (_: unknown, { email }: { email: string }) => {
      // eslint-disable-next-line no-console
      console.log('email', email);
      const user = await User.findOne({ email });
      return user;
    },
    getUsers: async () => User.find({}),
    getEvent: async (_: unknown, { _id }: { _id: string }) => {
      console.log('id', _id);
      const event = await Event.findOne({ _id });
      return event;
    },
    getEvents: async () => Event.find({}),
  },

  Mutation: {
    addUser: async (_: unknown, args: InputUser) => {
      try {
        const response = await User.create(args);
        // eslint-disable-next-line no-console
        console.log(response, args, args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
    addEvent: async (_: unknown, args: InputEvent) => {
      try {
        console.log('pas helooooooo', args);
        const response = await Event.create(args);
        // eslint-disable-next-line no-console
        console.log('helooooooooo', response, args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/virtualschool',
      /* ||'mongodb://mongodb:27017/virtualschool' */ {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
      }
    );
    // eslint-disable-next-line no-console
    console.log('Connected to database');
    app.listen(port, () =>
      // eslint-disable-next-line no-console
      console.log(
        `Express GraphQL Server is now running Youhou on localhost:${port}${server.graphqlPath}`
      )
    );
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  // middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Welcome Home !');
  });
};
start();
