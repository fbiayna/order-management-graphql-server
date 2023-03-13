import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

export class Queries {
  constructor(private readonly orderRepository: OrderRepository) {}

  get all() {
    return {
      fetchOrder: this.orderRepository.fetchOrder,
      fetchOrders: this.orderRepository.fetchOrders,
    };
  }
}
