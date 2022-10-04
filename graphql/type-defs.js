const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const { default: mongoose } = require('mongoose');
const Appointment = require('../models/Appointment');
const Client = require('../models/Client');
const Technician = require('../models/Technician');

// Technician Type
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
      resolve(parent, args) {
        return Client.findById(parent.client_id);
      },
    },
    technician: {
      type: TechnicianType,
      resolve(parent, args) {
        return Technician.findById(parent.technician_id);
      },
    },
  }),
});

module.exports = { TechnicianType, ClientType, AppointmentType };
