import { OrderRepository } from '../../domain/repositories/orderRepository';

export class Mutations {
  constructor(private readonly orderRepository: OrderRepository) {}

  get all() {
    return {
      setOrderState: this.orderRepository.setOrderState,
    };
  }
}
