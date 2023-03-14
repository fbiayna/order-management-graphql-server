import { OrderState } from '../../domain/entities/orderState';
import { OrderRepository } from '../../infrastructure/repositories/orderRepository';
import populateItems from '../../infrastructure/utils/populateItems';

export class Mutations {
  constructor(private readonly orderRepository: OrderRepository) {}

  get all() {
    return {
      setOrderState: async (
        _: unknown,
        {
          id,
          state,
          assignedTo,
        }: {
          id: string;
          state: OrderState;
          assignedTo?: string;
        }
      ) => {
        try {
          const order = await this.orderRepository.fetchOrder(
            id,
            populateItems
          );

          if (!order) {
            throw new Error('order with ID ${id} not found');
          }

          if (order.state === state) {
            return order;
          }

          if (state === OrderState.inProgress && !assignedTo) {
            throw new Error('There is no assignedTo value');
          }

          return await this.orderRepository.setOrderState(
            id,
            state,
            state === OrderState.inProgress && assignedTo ? assignedTo : null,
            populateItems
          );
        } catch (error) {
          throw new Error('Error setting order state');
        }
      },
    };
  }
}
