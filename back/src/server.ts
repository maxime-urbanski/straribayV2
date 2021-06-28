/* eslint-disable no-console */
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { typeDefs } from './type/type';

import resolvers from './resolvers';

const app = express();
const port = 7777;
// To do: put domain restriction
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => {
  //   // Note: This example uses the `req` argument to access headers,
  //   // but the arguments received by `context` vary by integration.
  //   // This means they vary for Express, Koa, Lambda, etc.
  //   //
  //   // To find out the correct arguments for a specific integration,
  //   // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

  //   // Get the user token from the headers.
  //   const token = req.headers.authorization || '';

  //   // Try to retrieve a user with the token
  //   //const user = getUser(req.headers.email);

  //   // Add the user to the context
  //   return { user };
  // },
});
server.applyMiddleware({ app });

const start = async () => {
  try {
    await mongoose.connect(
      // Todo : Make a dotenv !!!
      // TIP: if you don't use docker, uncomment the next line.
      // ,
      // 'mongodb://mongodb:27017/virtualschool',
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
