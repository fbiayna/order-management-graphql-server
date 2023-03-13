const typeDefs = `#graphql
  type Order {
    _id: ID!
    state: OrderState!
    assignedTo: String
    customer: Customer!
    lineItems: [LineItem!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Customer {
    _id: ID!
    name: String!
    email: String!
    address: String!
  }

  type LineItem {
    _id: ID!
    product: Product!
    quantity: Int!
  }

  type Product {
    _id: ID!
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

export default typeDefs;
