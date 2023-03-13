import { OrderRepository } from '../../infrastructure/repositories/orderRepository';

export class Mutations {
  constructor(private readonly orderRepository: OrderRepository) {}

  get all() {
    return {
      setOrderState: this.orderRepository.fetchOrder,
    };
  }
}
