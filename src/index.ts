import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Order {
    id: ID!
    state: OrderState!
    assignedTo: String
    customer: Customer!
    lineItems: [LineItem!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Customer {
    id: ID!
    name: String!
    email: String!
    address: String!
  }

  type LineItem {
    id: ID!
    product: Product!
    quantity: Int!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  enum OrderState {
    OPEN
    IN_PROGRESS
    COMPLETE
  }
  
  scalar DateTime

  type Query {
    fetchOrder(id: ID!): Order
    fetchOrders: [Order]!
  }

  type Mutation {
    setOrderState(id: ID!, state: String!, assignedTo: String): Order
  }
`;

const orders = [
  {
    id: '1',
    state: 'OPEN',
    assignedTo: null,
    customer: {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      address: '123 Main St',
    },
    lineItems: [
      {
        id: '1',
        product: {
          id: '1',
          name: 'Product A',
          price: 10.99,
        },
        quantity: 2,
      },
      {
        id: '2',
        product: {
          id: '2',
          name: 'Product B',
          price: 5.99,
        },
        quantity: 3,
      },
    ],
    createdAt: '2022-01-01T12:00:00Z',
    updatedAt: '2022-01-01T12:30:00Z',
  },
  {
    id: '2',
    state: 'OPEN',
    assignedTo: null,
    customer: {
      id: '2',
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      address: '456 Maple St',
    },
    lineItems: [
      {
        id: '3',
        product: {
          id: '1',
          name: 'Product A',
          price: 10.99,
        },
        quantity: 1,
      },
      {
        id: '4',
        product: {
          id: '3',
          name: 'Product C',
          price: 7.99,
        },
        quantity: 4,
      },
    ],
    createdAt: '2022-02-01T09:00:00Z',
    updatedAt: '2022-02-01T10:00:00Z',
  },
];

const resolvers = {
  Query: {
    fetchOrder(_, args) {
      return orders.find((order) => order.id === args.id);
    },
    fetchOrders: () => orders,
  },
  Mutation: {
    setOrderState: ({ id, state, assignedTo }) => {
      const order = orders.find((order) => order.id === id);
      if (!order) {
        throw new Error(`Order with ID ${id} not found`);
      }

      order.state = state;
      if (state === 'IN_PROGRESS') {
        order.assignedTo = assignedTo;
      } else {
        order.assignedTo = null;
      }

      return order;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
