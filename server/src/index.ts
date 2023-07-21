import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

// dotenv.config();
console.log('process.env: ', process.env);

async function startServer() {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`🚀 Connected to Mongo at ${process.env.MONGO_URI}`);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true, // enables introspection of the schema
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: +process.env.PORT! },
    });

    console.log(`🚀 Server ready at ${url}`);
}

startServer();