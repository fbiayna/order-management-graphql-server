import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

type Query = {
  orders: Order[];
};

type Order = {
  id: string;
  state: OrderState;
  customer: Customer;
  items: Item[];
  createdAt: number;
};

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type Item = {
  id: string;
  product: string;
  quantity: number;
  price: number;
};

enum OrderState {
  open = 'OPEN',
  inProgress = 'IN_PROGRESS',
  complete = 'COMPLETE',
}
