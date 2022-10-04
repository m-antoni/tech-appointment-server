const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = require('graphql');
const Appointment = require('../models/Appointment');
const Client = require('../models/Client');
const Technician = require('../models/Technician');
const { TechnicianType, ClientType, AppointmentType } = require('./type-defs');

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    technicians: {
      type: new GraphQLList(TechnicianType),
      resolve(parent, args) {
        return Technician.find();
      },
    },
    technician: {
      type: TechnicianType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Technician.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
    appointments: {
      type: new GraphQLList(AppointmentType),
      resolve(parent, args) {
        return Appointment.find();
      },
    },
    appointment: {
      type: AppointmentType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Appointment.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTechnician: {
      type: TechnicianType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const technician = new Technician({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });

        return technician.save();
      },
    },
    deleteTechnician: {
      type: TechnicianType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Technician.findByIdAndRemove(args.id);
      },
    },
    updateTechnician: {
      type: TechnicianType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Technician.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              phone: args.phone,
            },
          },
          {
            new: true,
          }
        );
      },
    },
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
          address: args.address,
        });

        return client.save();
      },
    },
    deleteClient: {
      type: ClientType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
      },
    },
    updateClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              address: args.address,
            },
          },
          {
            new: true,
          }
        );
      },
    },
    deleleAppointment: {
      type: AppointmentType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Appointment.findByIdAndRemove(args.id);
      },
    },
    addAppointment: {
      type: AppointmentType,
      args: {
        schedule_date: { type: GraphQLNonNull(GraphQLString) },
        service_type: { type: GraphQLNonNull(GraphQLString) },
        client_id: { type: GraphQLNonNull(GraphQLID) },
        technician_id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const appointment = new Appointment({
          schedule_date: args.schedule_date,
          service_type: args.service_type,
          client_id: args.client_id,
          technician_id: args.technician_id,
        });

        return appointment.save();
      },
    },
    deleleAppointment: {
      type: AppointmentType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Appointment.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
