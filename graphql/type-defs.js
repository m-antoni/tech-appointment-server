const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

// Technician Type
const TechnicianType = new GraphQLObjectType({
  name: 'Technician',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    appointment: {
      type: AppointmentType,
    },
    client: {
      type: AppointmentType,
    },
  }),
});

// Client Type
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

// Appointment Type
const AppointmentType = new GraphQLObjectType({
  name: 'AppointmentType',
  fields: () => ({
    id: { type: GraphQLID },
    receipt_no: { type: GraphQLString },
    schedule_date: { type: GraphQLString },
    service_type: { type: GraphQLString },
    client: {
      type: ClientType,
    },
    technician: {
      type: TechnicianType,
    },
  }),
});

module.exports = { TechnicianType, ClientType, AppointmentType };
