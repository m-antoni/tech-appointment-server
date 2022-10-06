const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const { CLIENT_TYPE } = require('../typedefs/_index');

const ADD_CLIENT = {
  type: CLIENT_TYPE,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args, { db }) {
    const client = new db.Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
      address: args.address,
    });

    return client.save();
  },
};

const DELETE_CLIENT = {
  type: CLIENT_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args, { db }) {
    return db.Client.findByIdAndRemove(args.id);
  },
};

const UPDATE_CLIENT = {
  type: CLIENT_TYPE,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
  },
  resolve(parent, args, { db }) {
    return db.Client.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          email: args.email,
          address: args.address,
        },
      },
      {
        new: true,
      }
    );
  },
};

module.exports = {
  ADD_CLIENT,
  DELETE_CLIENT,
  UPDATE_CLIENT,
};
