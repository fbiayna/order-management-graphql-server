import { CustomerModel } from '../../domain/models/customerModel';
import { LineItemModel } from '../../domain/models/lineItemModel';
import { ProductModel } from '../../domain/models/productModel';
import type { PopulateOptions } from 'mongoose';

const populateItems: PopulateOptions[] = [
  { path: 'customer', strictPopulate: false, model: CustomerModel },
  {
    path: 'lineItems',
    strictPopulate: false,
    model: LineItemModel,
    populate: {
      path: 'product',
      strictPopulate: false,
      model: ProductModel,
    },
  },
];

export default populateItems;
