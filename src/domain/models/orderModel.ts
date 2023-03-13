import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  state: String,
  assignedTo: { type: Schema.Types.Mixed },
  customer: { type: Schema.Types.ObjectId, ref: 'customers' },
  lineItems: [{ type: Schema.Types.ObjectId, ref: 'lineitems' }],
  createdAt: Date,
  updatedAt: Date,
});

export const OrderModel = model('orders', orderSchema);
