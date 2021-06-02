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
