import Customer from './customer';
import LineItem from './lineItem';
import { OrderState } from './orderState';

class Order {
  constructor(
    readonly _id: string,
    readonly state: OrderState,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly customer: Customer,
    readonly lineItems: LineItem[],
    readonly assignedTo?: string
  ) {}
}

export default Order;
