const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const { APPOINTMENT_TYPE } = require('../typedefs/_index');

const ADD_APPOINTMENT = {
  type: APPOINTMENT_TYPE,
  args: {
    schedule_date: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    client_id: { type: GraphQLNonNull(GraphQLID) },
    technician_id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args, { db }) {
    const appointment = new db.Appointment({
      schedule_date: args.schedule_date,
      title: args.title,
      description: args.description,
      client_id: args.client_id,
      technician_id: args.technician_id,
    });

    return appointment.save();
  },
};

const DELETE_APPOINTMENT = {
  type: APPOINTMENT_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args, { db }) {
    return db.Appointment.findByIdAndRemove(args.id);
  },
};

const UPDATE_APPOINTMENT = {
  type: APPOINTMENT_TYPE,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    schedule_date: { type: GraphQLString },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    client_id: { type: GraphQLID },
    technician_id: { type: GraphQLID },
  },
  resolve(parent, args, { db }) {
    return db.Appointment.findByIdAndUpdate(
      args.id,
      {
        $set: {
          schedule_date: args.schedule_data,
          title: args.title,
          description: args.description,
          client_id: args.client_id,
          technician_id: args.technician_id,
        },
      },
      {
        new: true,
      }
    );
  },
};

module.exports = {
  ADD_APPOINTMENT,
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT,
};
