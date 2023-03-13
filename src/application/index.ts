import { ApolloServer } from '@apollo/server';
import dotenv from 'dotenv';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from '../domain/schemas/typeDefs';
import resolvers from './resolvers/resolvers';

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const port = Number(process.env.HOST_PORT);

const { url } = await startStandaloneServer(server, {
  listen: { port: port || 4000 },
});

console.log(`🚀 Server listening at: ${url}`);
