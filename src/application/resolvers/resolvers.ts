import orders from '../../data/orders';
import { OrderRepository } from '../../domain/repositories/orderRepository';
import { Queries } from './queries';

const queries = new Queries(new OrderRepository());

const resolvers = {
  Query: queries.all,
  Mutation: {
    setOrderState: ({
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
    },
  },
};

export default resolvers;
