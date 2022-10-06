const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const Client = require('../../models/Client');
const Technician = require('../../models/Technician');

const AppointmentType = (types) =>
  new GraphQLObjectType({
    name: 'AppointmentType',
    fields: () => ({
      id: { type: GraphQLID },
      receipt_no: { type: GraphQLString },
      schedule_date: { type: GraphQLString },
      service_type: { type: GraphQLString },
      client: {
        type: types.ClientType,
        resolve(parent, args) {
          return Client.findById(parent.client_id);
        },
      },
      technician: {
        type: types.TechnicianType,
        resolve(parent, args) {
          return Technician.findById(parent.technician_id);
        },
      },
    }),
  });

module.exports = AppointmentType;
