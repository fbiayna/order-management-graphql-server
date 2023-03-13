import { OrderRepositoryType } from '../interfaces/orderRepositoryType';
import { CustomerModel } from '../../domain/models/customerModel';
import { LineItemModel } from '../../domain/models/lineItemModel';
import { OrderModel } from '../../domain/models/orderModel';
import { ProductModel } from '../../domain/models/productModel';
import Order from '../../domain/entities/Order';

export class OrderRepository implements OrderRepositoryType {
  fetchOrder = async (
    _: unknown,
    args: { id: string }
  ): Promise<Order | null | void> => {
    try {
      return OrderModel.findById(args.id, undefined, {
        populate: [
          { path: 'customer', strictPopulate: false, model: CustomerModel },
          {
            path: 'lineItems',
            strictPopulate: false,
            model: LineItemModel,
            populate: {
              path: 'product',
              strictPopulate: false,
              model: ProductModel,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchOrders = async (): Promise<Order[] | null | void> => {
    try {
      return OrderModel.find({}, undefined, {
        populate: [
          { path: 'customer', strictPopulate: false, model: CustomerModel },
          {
            path: 'lineItems',
            strictPopulate: false,
            model: LineItemModel,
            populate: {
              path: 'product',
              strictPopulate: false,
              model: ProductModel,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  // setOrderState = ({
  //   id,
  //   state,
  //   assignedTo,
  // }: {
  //   id: string;
  //   state: string;
  //   assignedTo: any;
  // }) => {
  //   const order = orders.find((order) => order.id === id);
  //   if (!order) {
  //     throw new Error(`Order with ID ${id} not found`);
  //   }

  //   order.state = state;
  //   if (state === 'IN_PROGRESS') {
  //     order.assignedTo = assignedTo;
  //   } else {
  //     order.assignedTo = null;
  //   }

  //   return order;
  // };
}
