const { GraphQLList, GraphQLID, GraphQLNonNull } = require('graphql');
const { APPOINTMENT_TYPE } = require('../typedefs/_index');

const APPOINTMENTS = {
  type: new GraphQLList(APPOINTMENT_TYPE),
  resolve(parent, args, { db }) {
    return db.Appointment.find();
  },
};

const APPOINTMENT = {
  type: APPOINTMENT_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args, { db }) {
    return db.Appointment.findById(args.id);
  },
};

module.exports = {
  APPOINTMENTS,
  APPOINTMENT,
};
