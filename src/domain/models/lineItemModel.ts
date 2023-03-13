import { Schema, model } from 'mongoose';

const lineItemSchema = new Schema({
  _id: Schema.Types.ObjectId,
  product: { type: Schema.Types.ObjectId, ref: 'products' },
  quantity: 'number',
});

export const LineItemModel = model('lineitems', lineItemSchema);
