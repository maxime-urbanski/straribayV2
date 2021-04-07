import * as mongoose from 'mongoose';

const { Schema } = mongoose;

export interface EnventModel extends mongoose.Document {
<<<<<<< HEAD
  title: string,
  date: Date,
  hour: string
  author: string,
  description: string
  infos: string
  image: string
=======
  title: string;
  date: Date;
  hour: string;
  author: string;
  description: string;
  infos: string;
  image: string;
  theme: string;
>>>>>>> 74c1c5f... fixed date
}

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  },
  hour: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  infos: {
    type: String,
    required: false
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

const Event = mongoose.model('event', eventSchema);

export default Event;