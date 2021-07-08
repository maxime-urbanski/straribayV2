import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IAuthor {
  firstname: string;
  lastname: string;
  email: string;
}

export interface EventModel extends mongoose.Document {
  title: string;
  date: Date;
  hour: string;
  author: IAuthor;
  description: string;
  infos: string;
  image: string;
  theme: string;
}

const eventSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
    default: new Date(),
  },
  hour: {
    type: String,
    required: false,
  },
  author: {
    type: {firstname: String, lastname: String, email: String},
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  infos: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  theme: {
    type: String,
    required: false,
  },
});

const Event = mongoose.model<EventModel>('event', eventSchema);

export default Event;
