import { Document } from 'mongoose';

export interface InputUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IAuth {
  token: string;
  user: IUser;
}
