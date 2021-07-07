/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';
import { IUser, InputUser, IAuth } from '../interface/user.interface';
import Password from '../service/Password';

dotenv.config();

const secret = process.env.JWT_SECRET;

const userResolver = {
  Query: {
    getUser: async (_: unknown, _id: string): Promise<IUser> => {
      const user = await User.findOne({ _id });
      return <IUser>user;
    },
    getUsers: async () => User.find({}),
  },

  Mutation: {
    addUser: async (_: unknown, args: { input: InputUser }) => {
      if (args.input.password.length < 8) throw Error('Password too short !!!');
      const user = await User.create(args.input);
      return user;
    },
    login: async (
      _: unknown,
      args: { email: string; password: string }
    ): Promise<IAuth> => {
      console.log('je suis la ');
      let token = '';
      const emailRequest = args.email;
      const passwordRequest = args.password;
      const user = await User.findOne({ email: emailRequest });
      if (!user) throw new Error("Email doesn't exist");

      const goodPassword = await Password.compare(
        user.password,
        passwordRequest
      );

      if (!goodPassword) throw new Error("Password doesn't match");
      if (user && goodPassword) {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { _id, email, role } = user;
        const payload = {
          _id,
          email,
          role,
        };
        token = jwt.sign(payload, secret, {
          expiresIn: '60d',
        });
      }

      return { token, user };
    },
  },
};

export default userResolver;
