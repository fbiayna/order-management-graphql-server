import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: 'string',
  email: 'string',
  address: 'string',
});

export const CustomerModel = model('customers', customerSchema);
