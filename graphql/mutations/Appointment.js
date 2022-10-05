const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const Appointment = require('../../models/Appointment');
const { AppointmentType } = require('../type-defs');
// const { AppointmentType } = require('../typedefs/AppointmentType');

const ADD_APPOINTMENT = {
  type: AppointmentType,
  args: {
    schedule_date: { type: GraphQLNonNull(GraphQLString) },
    service_type: { type: GraphQLNonNull(GraphQLString) },
    client_id: { type: GraphQLNonNull(GraphQLID) },
    technician_id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    const appointment = new Appointment({
      schedule_date: args.schedule_data,
      service_type: args.service_type,
      client_id: args.client_id,
      technician_id: args.technician_id,
    });

    return appointment.save();
  },
};

const DELETE_APPOINTMENT = {
  type: AppointmentType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Appointment.findByIdAndRemove(args.id);
  },
};

const UPDATE_APPOINTMENT = {
  type: AppointmentType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    schedule_date: { type: GraphQLString },
    service_type: { type: GraphQLString },
    client_id: { type: GraphQLID },
    technician_id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Appointment.findByIdAndUpdate(
      args.id,
      {
        $set: {
          schedule_date: args.schedule_data,
          service_type: args.service_type,
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
