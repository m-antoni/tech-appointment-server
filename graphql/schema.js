const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');
const Technician = require('../models/Technician');
const { TechnicianType } = require('./type-defs');

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    technicians: {
      type: new GraphQLList(TechnicianType),
      resolve(parent, args) {
        return Technician.find();
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnician: {
      type: TechnicianType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const technician = new Technician({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return technician.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
