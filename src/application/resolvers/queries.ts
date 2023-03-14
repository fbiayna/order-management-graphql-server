import { OrderRepository } from '../../infrastructure/repositories/orderRepository';
import populateItems from '../../infrastructure/utils/populateItems';

export class Queries {
  constructor(private readonly orderRepository: OrderRepository) {}

  get all() {
    return {
      fetchOrder: async (_: unknown, args: { id: string }) =>
        this.orderRepository.fetchOrder(args.id, populateItems),

      fetchOrders: async () => this.orderRepository.fetchOrders(populateItems),
    };
  }
}
