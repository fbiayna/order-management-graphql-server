import { Mutations } from '../application/resolvers/mutations';
import { OrderState } from '../domain/entities/orderState';
import { OrderModel } from '../domain/models/orderModel';
import { OrderRepository } from '../infrastructure/repositories/orderRepository';
import mockedOrder from './mockData';

describe('Mutations tests', () => {
  const orderRepository = new OrderRepository();
  const {
    all: { setOrderState },
  } = new Mutations(orderRepository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // setOrderState

  it('should return a mocked order without changing state', async () => {
    OrderModel.findById = jest.fn().mockReturnValue(mockedOrder);
    OrderModel.findByIdAndUpdate = jest.fn().mockReturnValue(mockedOrder);

    const result = await setOrderState(undefined, {
      id: mockedOrder._id,
      state: OrderState.open,
    });

    expect(result).toEqual(mockedOrder);
  });

  it('should return a mocked order after change state to complete', async () => {
    OrderModel.findById = jest.fn().mockReturnValue(mockedOrder);
    OrderModel.findByIdAndUpdate = jest.fn().mockReturnValue(mockedOrder);

    const result = await setOrderState(undefined, {
      id: mockedOrder._id,
      state: OrderState.complete,
    });

    expect(result).toEqual(mockedOrder);
  });

  it('should return a mocked order after change state to in progress', async () => {
    OrderModel.findById = jest.fn().mockReturnValue(mockedOrder);
    OrderModel.findByIdAndUpdate = jest.fn().mockReturnValue(mockedOrder);

    const result = await setOrderState(undefined, {
      id: mockedOrder._id,
      state: OrderState.inProgress,
      assignedTo: 'Ferran',
    });

    expect(result).toEqual(mockedOrder);
  });

  it('should throw an error - no assignedTo', async () => {
    OrderModel.findById = jest.fn().mockReturnValue(mockedOrder);
    OrderModel.findByIdAndUpdate = jest.fn().mockReturnValue(mockedOrder);

    await expect(
      setOrderState(undefined, {
        id: mockedOrder._id,
        state: OrderState.inProgress,
      })
    ).rejects.toThrowError('Error setting order state');
  });

  it('should throw an error - no order', async () => {
    await expect(
      setOrderState(undefined, {
        id: mockedOrder._id,
        state: OrderState.inProgress,
      })
    ).rejects.toThrow('Error setting order state');
  });

  it('should throw an error', async () => {
    OrderModel.findById = jest.fn().mockImplementation(() => {
      throw new Error('Error updating state');
    });
    OrderModel.findByIdAndUpdate = jest.fn().mockImplementation(() => {
      throw new Error('Error updating state');
    });

    await expect(
      orderRepository.setOrderState(mockedOrder._id, OrderState.open)
    ).rejects.toThrow('Error updating state');
  });
});
