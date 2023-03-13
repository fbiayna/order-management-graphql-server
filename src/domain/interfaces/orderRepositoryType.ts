export interface OrderRepositoryType {
  fetchOrder(_: any, args: any): any;
  fetchOrders(): any;
  setOrderState: ({
    id,
    state,
    assignedTo,
  }: {
    id: string;
    state: string;
    assignedTo: any;
  }) => any;
}
