import cors from "cors";
import express from "express";
import server from "./graphql";

const graphqlRouter = express.Router();
const app = express();

export default app;

// allow cors - let other sites access this app
app.use(cors());

// setup graphql server
server.applyMiddleware({ app, cors: false });
