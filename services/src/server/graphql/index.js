import { ApolloServer, makeExecutableSchema } from "apollo-server-express";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const schema = makeExecutableSchema({ resolvers, typeDefs });
const server = new ApolloServer({ schema });

export default server;
