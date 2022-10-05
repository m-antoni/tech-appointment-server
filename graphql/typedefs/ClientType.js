const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const ClientType = new GraphQLObjectType({
  name: 'ClientType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

module.exports = {
  ClientType,
};
