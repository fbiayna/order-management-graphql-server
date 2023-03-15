import { Queries } from '../application/resolvers/queries';
import { OrderModel } from '../domain/models/orderModel';
import { OrderRepository } from '../infrastructure/repositories/orderRepository';
import mockedOrder from './mockData';

describe('Queries test', () => {
  const orderRepository = new OrderRepository();
  const {
    all: { fetchOrder, fetchOrders },
  } = new Queries(orderRepository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // fetchOrder

  it('should return a mocked order', async () => {
    OrderModel.findById = jest.fn().mockReturnValue(mockedOrder);

    const result = await fetchOrder(undefined, {
      id: mockedOrder._id,
    });

    expect(result).toEqual(mockedOrder);
  });

  it('should throw an error', async () => {
    OrderModel.findById = jest.fn().mockImplementation(() => {
      throw new Error('Error fetching order');
    });

    await expect(orderRepository.fetchOrder(mockedOrder._id)).rejects.toThrow(
      'Error fetching order'
    );
  });

  // fetchOrders

  it('should return a mocked orders', async () => {
    OrderModel.find = jest.fn().mockReturnValue(mockedOrder);

    const result = await fetchOrders();

    expect(result).toEqual(mockedOrder);
  });

  it('should throw an error', async () => {
    OrderModel.find = jest.fn().mockImplementation(() => {
      throw new Error('Error fetching orders');
    });

    await expect(orderRepository.fetchOrders()).rejects.toThrow(
      'Error fetching orders'
    );
  });
});
