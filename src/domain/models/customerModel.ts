import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  email: String,
  address: String,
});

export const CustomerModel = model('customers', customerSchema);
