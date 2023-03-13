import orders from '../../data/orders';
import { OrderRepositoryType } from '../interfaces/orderRepositoryType';

export class OrderRepository implements OrderRepositoryType {
  fetchOrder = (_: any, args: { id: string }) =>
    orders.find((order) => order.id === args.id);

  fetchOrders = () => orders;
}
