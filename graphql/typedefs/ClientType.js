const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const ClientType = (types) =>
  new GraphQLObjectType({
    name: 'ClientType',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      address: { type: GraphQLString },
    }),
  });

module.exports = ClientType;
