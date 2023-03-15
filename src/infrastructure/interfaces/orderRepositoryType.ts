import Order from '../../domain/entities/Order';
import type { PopulateOptions } from 'mongoose';
import { OrderState } from '../../domain/entities/orderState';

export interface OrderRepositoryType {
  fetchOrder: (
    id: string,
    populate?: PopulateOptions[]
  ) => Promise<Order | null>;
  fetchOrders: (populate?: PopulateOptions[]) => Promise<Order[] | null>;
  setOrderState: (
    id: string,
    state: OrderState,
    assignedTo: string,
    populate?: PopulateOptions[]
  ) => Promise<Order | null>;
}
