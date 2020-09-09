import { data } from "./data";

let ec2Types = data.ec2.types;
let ec2Options = data.ec2.options;

export const resolvers = {
  Query: {
    ec2types(_parent, args) {
      const { type } = args;
      if (!type) {
        return ec2Types;
      }

      return ec2Types.filter((ec2) => {
        return ec2.type.includes(type);
      });
    },
    ec2options() {
      return options;
    },
  },
};
