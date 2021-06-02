import * as mongoose from 'mongoose';
import { Password } from 'src/service/Password';
const { Schema } = mongoose;
const saltRounds = 12;
// export const { Mixed } = mongoose.Schema.Types;

export interface UserModel extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  // avatar: string;
  // group: string;
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
    min: 8,
  },
  group: String,
});

userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();  
});

const User = mongoose.model<UserModel>('user', userSchema);

export default User;
