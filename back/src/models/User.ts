import * as mongoose from 'mongoose';
import Password from '../service/Password';

const { Schema } = mongoose;
// export const { Mixed } = mongoose.Schema.Types;

export interface UserModel extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 8,
  },
  role: {
    type: String,
    default: 'USER',
  },
  // group: String,
});

// eslint-disable-next-line func-names
userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  return done();
});

const User = mongoose.model<UserModel>('user', userSchema);

export default User;
