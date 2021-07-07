/* eslint-disable no-console */
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import { verify } from 'jsonwebtoken';
import { typeDefs } from './type/type';

import resolvers from './resolvers';
import User from './models/User';

dotenv.config();
const app = express();

// To do: put domain restriction
app.use(cors());

const secret = process.env.JWT_SECRET;
const mongoConnection = process.env.MONGO_ADDRESS;
const dbName = process.env.DB_NAME;
const mongoPort = process.env.MONGO_PORT;
const serverPort = process.env.SERVER_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const bearerToken = req.headers.authorization || '';
    if (bearerToken) {
      const token = bearerToken.split(' ')[1];
      const verifyToken = verify(token, secret);
      const user = await User.findOne({ email: verifyToken.email });
      if (!user) throw new AuthenticationError('you must be logged in');
      // if (user) delete user.password;
      return { user };
    }
  },
});
server.applyMiddleware({ app });

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb://${mongoConnection}:${mongoPort}/${dbName}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
      }
    );
    // eslint-disable-next-line no-console
    console.log('Connected to database');
    app.listen(serverPort, () =>
      // eslint-disable-next-line no-console
      console.log(
        `Express GraphQL Server is now running on localhost:${serverPort}${server.graphqlPath}`
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
