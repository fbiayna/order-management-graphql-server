import { OrderRepository } from '../../infrastructure/repositories/orderRepository';
import { Mutations } from './mutations';
import { Queries } from './queries';

const queries = new Queries(new OrderRepository());
const mutations = new Mutations(new OrderRepository());

const resolvers = {
  Query: queries.all,
  Mutation: mutations.all,
};

export default resolvers;
