const {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const Client = require('../../models/Client');
const { CLIENT_TYPE } = require('../typedefs/_index');

const CLIENTS = {
  type: new GraphQLList(CLIENT_TYPE),
  resolve(parent, args) {
    return Client.find();
  },
};

const CLIENT = {
  type: CLIENT_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Client.findById(args.id);
  },
};

module.exports = {
  CLIENTS,
  CLIENT,
};
