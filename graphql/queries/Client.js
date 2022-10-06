const { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const { CLIENT_TYPE } = require('../typedefs/_index');

const CLIENTS = {
  type: new GraphQLList(CLIENT_TYPE),
  resolve(parent, args, { db }) {
    return db.Client.find();
  },
};

const CLIENT = {
  type: CLIENT_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args, { db }) {
    return db.Client.findById(args.id);
  },
};

module.exports = {
  CLIENTS,
  CLIENT,
};
