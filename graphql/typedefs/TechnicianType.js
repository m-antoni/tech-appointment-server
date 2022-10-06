const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const Appointment = require('../../models/Appointment');

const TechnicianType = (types) =>
  new GraphQLObjectType({
    name: 'Technician',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      appointments: {
        type: new GraphQLList(types.AppointmentType),
        resolve(parent, args) {
          return Appointment.find({ technician_id: parent._id });
        },
      },
    }),
  });

module.exports = TechnicianType;
