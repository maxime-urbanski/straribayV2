import { IResolvers } from 'apollo-server-express';
import eventResolver from './event.resolver';
import userResolver from './user.resolver';

const { Query: EventQuery, Mutation: EventMutation } = eventResolver;
const { Query: UserQuery, Mutation: UserMutation } = userResolver;

const resolvers = {
  Query: {
    ...EventQuery,
    ...UserQuery,
  },
  Mutation: {
    ...EventMutation,
    ...UserMutation,
  },
};

export default resolvers as IResolvers;
