import { Document } from 'mongoose';

export interface InputUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IUser extends Document {
  firstname?: string;
  lastname?: string;
  email?: string;
  token?: string;
}
