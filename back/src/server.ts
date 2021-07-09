/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import cors from 'cors';
import { verify } from 'jsonwebtoken';
import { typeDefs } from './type/type';

import resolvers from './resolvers';
import User from './models/User';

const app = express();
const port = 7777;

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const bearerToken = req.headers.authorization || '';
    if (bearerToken) {
      const token = bearerToken.split(' ')[1];
      const verifyToken: any = verify(token, 'tokhein');
      const user = await User.findOne({ email: verifyToken['email'] });
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
      // Todo : Make a dotenv !!!
      // TIP: if you don't use docker, uncomment the next line.
      // ,
      //'mongodb://mongodb:27017/virtualschool',
      'mongodb://127.0.0.1:27017/virtualschool',
      {
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
