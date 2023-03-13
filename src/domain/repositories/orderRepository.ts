import orders from '../../data/orders';
import { OrderRepositoryType } from '../interfaces/orderRepositoryType';

export class OrderRepository implements OrderRepositoryType {
  fetchOrder = (_: any, args: { id: string }) =>
    orders.find((order) => order.id === args.id);

  fetchOrders = () => orders;
  setOrderState = ({
    id,
    state,
    assignedTo,
  }: {
    id: string;
    state: string;
    assignedTo: any;
  }) => {
    const order = orders.find((order) => order.id === id);
    if (!order) {
      throw new Error(`Order with ID ${id} not found`);
    }

    order.state = state;
    if (state === 'IN_PROGRESS') {
      order.assignedTo = assignedTo;
    } else {
      order.assignedTo = null;
    }

    return order;
  };
}
