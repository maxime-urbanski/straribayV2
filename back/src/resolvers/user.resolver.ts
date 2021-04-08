/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import User from '../models/User';
import { IUser, InputUser } from '../interface/user.interface';

const userResolver = {
  Query: {
    getUser: async (
      _: unknown,
      { email }: { email: string }
    ): Promise<IUser> => {
      // eslint-disable-next-line no-console
      console.log('email', email);
      const user = await User.findOne({ email });
      return <IUser>user;
    },
    getUsers: async () => User.find({}),
  },

  Mutation: {
    addUser: async (_: unknown, args: { input: InputUser }) => {
      try {
        const response = await User.create(args.input);
        // eslint-disable-next-line no-console
        console.log(response, args, args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};
export default userResolver;
