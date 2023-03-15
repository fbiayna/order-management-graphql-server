import { OrderRepositoryType } from '../interfaces/orderRepositoryType';
import { OrderModel } from '../../domain/models/orderModel';
import Order from '../../domain/entities/Order';
import type { PopulateOptions } from 'mongoose';
import { OrderState } from '../../domain/entities/orderState';

export class OrderRepository implements OrderRepositoryType {
  fetchOrder = async (
    id: string,
    populate?: PopulateOptions[]
  ): Promise<Order | null | void> => {
    try {
      return await OrderModel.findById(id, undefined, {
        populate,
      });
    } catch (error) {
      throw new Error('Error fetching order');
    }
  };

  fetchOrders = async (
    populate?: PopulateOptions[]
  ): Promise<Order[] | null | void> => {
    try {
      return await OrderModel.find({}, undefined, {
        populate,
      });
    } catch (error) {
      throw new Error('Error fetching orders');
    }
  };

  setOrderState = async (
    id: string,
    state: OrderState,
    assignedTo?: string,
    populate?: PopulateOptions[]
  ): Promise<Order | null | void> => {
    try {
      return await OrderModel.findByIdAndUpdate(
        id,
        {
          state,
          assignedTo,
          updatedAt: Date.now(),
        },
        { populate, new: true }
      );
    } catch (error) {
      throw new Error('Error updating state');
    }
  };
}
