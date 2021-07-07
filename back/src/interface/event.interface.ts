import { Document } from 'mongoose';

import { IAuthor } from '../models/Event';

export interface IInputEvent extends Document {
  title: string;
  theme: string;
  date: string;
  hour: string;
  description: string;
  infos: string;
  image: string;
}

export interface IEvent extends Document {
  author: IAuthor;
  title: string;
  date: string;
  hour: string;
  description: string;
  infos: string;
  theme: string;
}

export interface IId extends Document {
  _id: string;
}
