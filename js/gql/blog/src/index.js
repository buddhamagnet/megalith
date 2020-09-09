import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./schema.gql";
import { resolvers } from "./resolvers";
import { data } from "./data";

let users = data.users;
let comments = data.comments;
let posts = data.posts;

new GraphQLServer({
  typeDefs,
  resolvers,
  context: { users, comments, posts },
}).start(() => {
  console.log("running...");
});
