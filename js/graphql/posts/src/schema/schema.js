const _ = require("lodash");

const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = require("graphql");

const UserType = require("../models/User");
const PostType = require("../models/Post");
const HobbyType = require("../models/Hobby");

const User = new GraphQLObjectType({
  name: "User",
  description: "user type",
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      profession: { type: GraphQLString },
      hobbies: {
        type: new GraphQLList(Hobby),
        resolve: (parent, _args) => {
          return HobbyType.find({ userId: parent.id });
        }
      },
      posts: {
        type: new GraphQLList(Post),
        resolve: (parent, _args) => {
          return PostType.find({ userId: parent.id });
        }
      }
    };
  }
});

const Hobby = new GraphQLObjectType({
  name: "Hobby",
  description: "hobby type",
  fields: () => {
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      user: {
        type: User,
        resolve: (parent, _args) => {
          return UserType.findById(parent.userId);
        }
      }
    };
  }
});

const Post = new GraphQLObjectType({
  name: "Post",
  description: "post type",
  fields: () => {
    return {
      id: { type: GraphQLID },
      content: { type: GraphQLString },
      comment: { type: GraphQLString },
      user: {
        type: User,
        resolve: (parent, _args) => {
          return UserType.findById(parent.userId);
        }
      }
    };
  }
});

const Mutations = new GraphQLObjectType({
  name: "AddUser",
  description: "User mutation",
  fields: {
    addUser: {
      type: User,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        profession: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(_parent, { name, age, profession }) {
        const user = new UserType({ name, age, profession });
        return user.save();
      }
    },
    updateUser: {
      type: User,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        name: {
          type: GraphQLString
        },
        age: {
          type: GraphQLInt
        },
        profession: {
          type: GraphQLString
        }
      },
      resolve(_parent, args) {
        return UserType.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              age: args.age,
              profession: args.profession
            }
          },
          { new: true }
        );
      }
    },
    deleteUser: {
      type: User,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_parent, args) {
        return UserType.findByIdAndRemove(args.id);
      }
    },
    addPost: {
      type: Post,
      args: {
        content: {
          type: GraphQLString
        },
        userId: {
          type: GraphQLID
        }
      },
      resolve(_parent, { content, userId }) {
        let post = new PostType({ content, userId });
        return post.save();
      }
    },
    updatePost: {
      type: Post,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        content: {
          type: GraphQLString
        },
        comment: {
          type: GraphQLString
        }
      },
      resolve(_parent, args) {
        return PostType.findByIdAndUpdate(
          args.id,
          {
            $set: {
              content: args.content,
              comment: args.comment
            }
          },
          { new: true }
        );
      }
    },
    deletePost: {
      type: Post,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_parent, args) {
        return PostType.findByIdAndRemove(args.id);
      }
    },
    addHobby: {
      type: Hobby,
      args: {
        title: {
          type: GraphQLString
        },
        description: {
          type: GraphQLString
        },
        userId: {
          type: GraphQLString
        }
      },
      resolve(_parent, { title, description, userId }) {
        let hobby = new HobbyType({ title, description, userId });
        return hobby.save();
      }
    },
    updateHobby: {
      type: Hobby,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        title: {
          type: GraphQLString
        },
        description: {
          type: GraphQLString
        }
      },
      resolve(_parent, args) {
        return HobbyType.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              description: args.description
            }
          },
          { new: true }
        );
      }
    },
    deleteHobby: {
      type: Hobby,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(_parent, args) {
        return HobbyType.findByIdAndRemove(args.id);
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  decsription: "root query",
  fields: {
    users: {
      type: new GraphQLList(User),
      resolve() {
        return UserType.find();
      }
    },
    hobbies: {
      type: new GraphQLList(Hobby),
      resolve() {
        return HobbyType.find();
      }
    },
    posts: {
      type: new GraphQLList(Post),
      resolve() {
        return PostType.find();
      }
    },
    user: {
      type: User,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(_parent, args) {
        return UserType.findById(args.id);
      }
    },
    hobby: {
      type: Hobby,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(_parent, args) {
        return HobbyType.findById(args.id);
      }
    },
    post: {
      type: Post,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(_parent, args) {
        return PostType.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
