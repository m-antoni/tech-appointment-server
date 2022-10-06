const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const mutations = require('./mutations/_index');
const queries = require('./queries/_index');

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    clients: queries.CLIENTS,
    client: queries.CLIENT,
    technicians: queries.TECHNICIANS,
    technician: queries.TECHNICIAN,
    appointments: queries.APPOINTMENTS,
    appointment: queries.APPOINTMENT,
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnician: mutations.ADD_TECHNICIAN,
    updateTechnician: mutations.UPDATE_TECHNICIAN,
    deleteTechnician: mutations.DELETE_TECHNCIAN,
    addClient: mutations.ADD_CLIENT,
    updateClient: mutations.UPDATE_CLIENT,
    deleteClient: mutations.DELETE_CLIENT,
    addAppointment: mutations.ADD_APPOINTMENT,
    updateAppointment: mutations.UPDATE_APPOINTMENT,
    deleleAppointment: mutations.DELETE_APPOINTMENT,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
