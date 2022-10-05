const {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const Client = require('../../models/Client');
const { ClientType } = require('../type-defs');
// const { ClientType } = require('../typedefs/ClientType');

const CLIENTS = {
  type: new GraphQLList(ClientType),
  resolve(parent, args) {
    return Client.find();
  },
};

const CLIENT = {
  type: ClientType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Client.findById(args.id);
  },
};

module.exports = {
  CLIENTS,
  CLIENT,
};
