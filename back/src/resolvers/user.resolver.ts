/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import User from '../models/User';
import { IUser, InputUser } from '../interface/user.interface';

const userResolver = {
  Query: {
    getUser: async (_: unknown, { _id }: { _id: string }): Promise<IUser> => {
      // eslint-disable-next-line no-console
      console.log('email', _id);
      const user = await User.findOne({ _id });
      return <IUser>user;
    },
    getUsers: async () => User.find({}),
  },

  Mutation: {
    addUser: async (_: unknown, args: { input: InputUser }) => {
      const user = await User.create(args.input);
      // eslint-disable-next-line no-console
      console.log(user, args, args);
      return user;
    },
  },
};
export default userResolver;
