/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { IUser, InputUser } from '../interface/user.interface';
import Password from '../service/Password';

const secret = process.env.JWT_SECRET;

const userResolver = {
  Query: {
    getUser: async (_: unknown, { _id }: { _id: string }): Promise<IUser> => {
      const user = await User.findOne({ _id });
      return <IUser>user;
    },
    getUsers: async () => User.find({}),
  },

  Mutation: {
    addUser: async (_: unknown, args: { input: InputUser }) => {
      const user = await User.create(args.input);
      return user;
    },
    auth: async (
      _: unknown,
      args: { email: string; password: string }
    ): Promise<IUser> => {
      const emailRequest = args.email;
      console.log('Emauil', emailRequest, 'secret ==>', secret);
      const user = await User.findOne({ email: emailRequest });
      if (!user) throw new Error("Email don't exist");
      const goodPassword = await Password.compare(user.password, args.password);
      if (user && goodPassword) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _id, email, password, role } = user;
        const payload = {
          _id,
          email,
          password,
          role,
        };
        const token = jwt.sign(payload, 'test', {
          expiresIn: '3h',
        });
        console.log(token);
        user.token = token;
      }
      return <IUser>user;
    },
  },
};
export default userResolver;
