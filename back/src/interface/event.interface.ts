import { Document } from 'mongoose';

export interface IInputEvent extends Document {
  title: string;
  theme: string;
  date: string;
  hour: string;
  author?: string;
  description: string;
  infos: string;
  image: string;
}

export interface IEvent extends Document {
  title: string;
  date: string;
  hour: string;
  description: string;
  infos: string;
  theme: string;
}
