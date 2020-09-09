import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./schema.gql";
import { resolvers } from "./resolvers";

new GraphQLServer({
  typeDefs,
  resolvers,
}).start(() => {
  console.log("running...");
});
