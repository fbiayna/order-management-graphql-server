import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: 'string',
  price: 'number',
});

export const ProductModel = model('products', productSchema);
