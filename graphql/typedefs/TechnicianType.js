const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const Appointment = require('../../models/Appointment');
const { AppointmentType } = require('./AppointmentType');

const TechnicianType = new GraphQLObjectType({
  name: 'Technician',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    appointments: {
      type: new GraphQLList(AppointmentType),
      resolve(parent, args) {
        return Appointment.find({ technician_id: parent._id });
      },
    },
  }),
});

module.exports = {
  TechnicianType,
};
