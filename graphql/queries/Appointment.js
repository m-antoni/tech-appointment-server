const { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const Appointment = require('../../models/Appointment');
const { AppointmentType } = require('../type-defs');
// const { AppointmentType } = require('../typedefs/AppointmentType');

const APPOINTMENTS = {
  type: new GraphQLList(AppointmentType),
  resolve(parent, args) {
    return Appointment.find();
  },
};

const APPOINTMENT = {
  type: AppointmentType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Appointment.findById(args.id);
  },
};

module.exports = {
  APPOINTMENTS,
  APPOINTMENT,
};
