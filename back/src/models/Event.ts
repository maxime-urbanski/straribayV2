import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export interface EnventModel extends mongoose.Document {
  title: string;
  date: Date;
  hour: string;
  author: string;
  description: string;
  infos: string;
  image: string;
}

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
    default: new Date(),
  },
  hour: {
    type: String,
    required: true,
  },
  author: {
    type: String,
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
});

const Event = mongoose.model('event', eventSchema);

export default Event;
