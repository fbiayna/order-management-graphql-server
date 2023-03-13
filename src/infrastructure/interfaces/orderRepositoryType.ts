import Order from '../../domain/entities/Order';

export interface OrderRepositoryType {
  fetchOrder: (
    _: unknown,
    args: { id: string }
  ) => Promise<Order | null | void>;
  fetchOrders: () => Promise<Order[] | null | void>;
  // setOrderState: ({
  //   id,
  //   state,
  //   assignedTo,
  // }: {
  //   id: string;
  //   state: string;
  //   assignedTo: any;
  // }) => any;
}
