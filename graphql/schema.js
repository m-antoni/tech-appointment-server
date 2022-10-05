const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT,
} = require('./mutations/Appointment');
const {
  ADD_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
} = require('./mutations/Client');
const {
  ADD_TECHNICIAN,
  DELETE_TECHNCIAN,
  UPDATE_TECHNICIAN,
} = require('./mutations/Technician');
const { APPOINTMENTS, APPOINTMENT } = require('./queries/Appointment');
const { CLIENTS, CLIENT } = require('./queries/Client');
const { TECHNICIANS, TECHNICIAN } = require('./queries/Technician');

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    clients: CLIENTS,
    client: CLIENT,
    technicians: TECHNICIANS,
    technician: TECHNICIAN,
    appointments: APPOINTMENTS,
    appointment: APPOINTMENT,
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnician: ADD_TECHNICIAN,
    updateTechnician: UPDATE_TECHNICIAN,
    deleteTechnician: DELETE_TECHNCIAN,
    addClient: ADD_CLIENT,
    updateClient: UPDATE_CLIENT,
    deleteClient: DELETE_CLIENT,
    addAppointment: ADD_APPOINTMENT,
    updateAppointment: UPDATE_APPOINTMENT,
    deleleAppointment: DELETE_APPOINTMENT,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
