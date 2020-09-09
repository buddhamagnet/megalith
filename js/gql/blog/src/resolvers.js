import { v4 as uuidv4 } from "uuid";

import { data } from "./data";

let users = data.users;
let comments = data.comments;
let posts = data.posts;

export const resolvers = {
  Query: {
    users(_parent, args) {
      const { query } = args;
      if (!query) {
        return users;
      }

      return users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    posts(_parent, args) {
      const { query } = args;

      if (!query) {
        return posts;
      }

      const lowercased = query.toLowerCase();

      return posts.filter((post) => {
        const isTitleMatch = post.title.toLowerCase().includes(lowercased);
        const isBodyMatch = post.body.toLowerCase().includes(lowercased);
        return isTitleMatch || isBodyMatch;
      });
    },
    comments() {
      return comments;
    },
  },
  Mutation: {
    create_user(_parent, args, ctx) {
      const emailTaken = ctx.users.some(
        (user) => user.email === args.user.email
      );
      if (emailTaken) {
        throw new Error("email has already been taken");
      }
      const user = { ...args.user, id: uuidv4() };
      ctx.users = [...ctx.users, user];
      return user;
    },
    update_user(_parent, args, ctx) {
      const user = ctx.users.find((user) => user.id === args.id);
      if (!user) {
        throw new Error("user does not exist");
      }
      ctx.users = ctx.users.map((user) => {
        if (args.user.email === user.email) throw new Error("email is taken");
        if (user.id !== args.id) return user;
        return { ...user, ...args.user };
      });
      return { ...user, ...args.user };
    },
    delete_user(_parent, args, ctx) {
      const user = ctx.users.find((user) => user.id === args.id);
      if (!user) {
        throw new Error("user does not exist");
      }
      ctx.users = ctx.users.filter((user) => user.id !== args.id);
      ctx.posts = ctx.posts.filter((post) => post.author !== args.id);
      return user;
    },
    create_post(_parent, args, ctx) {
      const userExists = ctx.users.find((user) => user.id === args.post.author);
      if (!userExists) {
        throw new Error("user does not exist");
      }
      const post = {
        ...args.post,
        id: uuidv4(),
        published: args.published || false,
      };
      ctx.posts = [...ctx.posts, post];
      return post;
    },
    delete_post(_parent, args, ctx) {
      const post = ctx.posts.find((post) => post.id === args.id);
      if (!post) {
        throw new Error("post does not exist");
      }
      ctx.posts = ctx.posts.filter((post) => post.id !== args.id);
      ctx.comments = ctx.comments.filter((comment) => comment.post !== args.id);
      return post;
    },
    create_comment(_parent, args, ctx) {
      const postExists = ctx.posts.find(
        (post) => post.id === args.comment.post
      );
      if (!postExists) {
        throw new Error("post does not exist");
      }
      const comment = { ...args.comment, id: uuidv4() };
      ctx.comments = [...ctx.comments, comment];
      return comment;
    },
    delete_comment(_parent, args, ctx) {
      const comment = ctx.comments.find((comment) => comment.id === args.id);
      if (!comment) {
        throw new Error("comment does not exist");
      }
      ctx.comments = ctx.comments.filter((comment) => comment.id !== args.id);
      return comment;
    },
  },
  Post: {
    author(parent, _args) {
      return users.find((user) => user.id === parent.author);
    },
    comments(parent, _args) {
      return comments.filter((comment) => comment.post === parent.id);
    },
  },
  Comment: {
    post(parent, _args) {
      return posts.find((post) => post.id === parent.post);
    },
  },
  User: {
    posts(parent, _args) {
      return posts.filter((post) => post.author === parent.id);
    },
    comments(parent, _args) {
      return comments.filter((comment) => comment.author === parent.id);
    },
  },
};
