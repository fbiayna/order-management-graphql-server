import Customer from '../domain/entities/customer';
import LineItem from '../domain/entities/lineItem';
import Order from '../domain/entities/Order';
import { OrderState } from '../domain/entities/orderState';
import Product from '../domain/entities/product';

const mockedCustomer = new Customer(
  '987',
  'John Doe',
  'johndoe@example.com',
  '123 Main St'
);

const mockedProduct = new Product('012', 'Product B', 5.99);

const mockedLineItems = [new LineItem('789', 2, mockedProduct)];

const mockedOrder = new Order(
  '123',
  OrderState.open,
  new Date(),
  new Date(),
  mockedCustomer,
  mockedLineItems,
  undefined
);

export default mockedOrder;
