import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
});

export const ProductModel = model('products', productSchema);
