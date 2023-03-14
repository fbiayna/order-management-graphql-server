import { OrderModel } from '../domain/models/orderModel';
import { OrderRepository } from '../infrastructure/repositories/orderRepository';
import mockedOrder from './mockData';

describe('OrderRepository', () => {
  describe('fetchOrder', () => {
    it('should return a mocked order', async () => {
      const orderRepository = new OrderRepository();

      OrderModel.findById = jest.fn().mockReturnValue(mockedOrder);

      const result = await orderRepository.fetchOrder(mockedOrder._id);
      console.log(result);

      expect(result).toEqual(mockedOrder);
    });
  });
});

// describe('Queries', () => {
//   let orderRepository: OrderRepository;
//   let queries: Queries;

//   beforeEach(() => {
//     orderRepository = new OrderRepository() as jest.Mocked<OrderRepository>;
//     queries = new Queries(orderRepository);
//   });

//   describe('fetchOrder', () => {
//     it('should return an order', async () => {
//       const expectedOrder = { _id: '123' };
//       orderRepository.fetchOrder.mockResolvedValue(expectedOrder);

//       const result = await queries.all.fetchOrder(null, { id: '123' });

//       expect(orderRepository.fetchOrder).toHaveBeenCalledWith(
//         '123',
//         populateItems
//       );
//       expect(result).toBe(expectedOrder);
//     });

//     it('should throw an error', async () => {
//       orderRepository.fetchOrder.mockRejectedValue(new Error('Database error'));

//       await expect(queries.all.fetchOrder(null, { id: '123' })).rejects.toThrow(
//         'Error fetching order'
//       );
//     });
//   });

//   describe('fetchOrders', () => {
//     it('should return an array of orders', async () => {
//       const expectedOrders = [
//         { _id: '123', items: [] },
//         { _id: '456', items: [] },
//       ];
//       orderRepository.fetchOrders.mockResolvedValue(expectedOrders);

//       const result = await queries.all.fetchOrders(null, {});

//       expect(orderRepository.fetchOrders).toHaveBeenCalledWith(populateItems);
//       expect(result).toEqual(expectedOrders);
//     });

//     it('should throw an error', async () => {
//       orderRepository.fetchOrders.mockRejectedValue(
//         new Error('Database error')
//       );

//       await expect(queries.all.fetchOrders(null, {})).rejects.toThrow(
//         'Error fetching orders'
//       );
//     });
//   });
// });
