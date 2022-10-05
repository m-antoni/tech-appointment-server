const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const Client = require('../../models/Client');
const { ClientType } = require('../type-defs');
// const { ClientType } = require('../typedefs/ClientType');

const ADD_CLIENT = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    const client = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
      address: args.address,
    });

    return client.save();
  },
};

const DELETE_CLIENT = {
  type: ClientType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Client.findByIdAndRemove(args.id);
  },
};

const UPDATE_CLIENT = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Client.findByIdAndUpdate(
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
