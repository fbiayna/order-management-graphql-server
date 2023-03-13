import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import typeDefs from '../domain/schemas/typeDefs';
import resolvers from './resolvers/resolvers';
import mongoose from 'mongoose';

// Fetch env variables

dotenv.config();
const port = Number(process.env.HOST_PORT) || 8080;
const hostName = process.env.HOST_NAME;
const mongooseURL = process.env.MONGOOSE_URL;

if (!mongooseURL) {
  console.log('There is no database URL');
  process.exit(1);
}

try {
  // Setup Mongoose

  await mongoose.connect(mongooseURL);
  console.log('Mongoose is connected');

  // Setup Apollo Server Express app

  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  app.use('/', cors(), bodyParser.json(), expressMiddleware(server));

  // Run

  await new Promise<void>((resolve) =>
    httpServer.listen({ port, hostName }, resolve)
  );
  console.log(`Server is listening on http://${hostName}:${port}`);
} catch (error) {
  console.log(error);
}
