import Product from './product';

class LineItem {
  constructor(
    readonly _id: string,
    readonly quantity: number,
    readonly product: Product
  ) {}
}

export default LineItem;
