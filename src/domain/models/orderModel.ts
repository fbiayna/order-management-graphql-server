import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  state: 'string',
  assignedTo: { type: Schema.Types.Mixed },
  customer: { type: Schema.Types.ObjectId, ref: 'customers' },
  lineItems: [{ type: Schema.Types.ObjectId, ref: 'lineitems' }],
  createdAt: 'date',
  updatedAt: 'date',
});

export const OrderModel = model('orders', orderSchema);
