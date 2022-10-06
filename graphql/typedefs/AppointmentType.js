const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

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
        resolve(parent, args, { db }) {
          return db.Client.findById(parent.client_id);
        },
      },
      technician: {
        type: types.TechnicianType,
        resolve(parent, args, { db }) {
          return db.Technician.findById(parent.technician_id);
        },
      },
    }),
  });

module.exports = AppointmentType;
