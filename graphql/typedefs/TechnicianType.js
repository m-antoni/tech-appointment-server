const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');

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
        resolve(parent, args, { db }) {
          return db.Appointment.find({ technician_id: parent._id });
        },
      },
    }),
  });

module.exports = TechnicianType;
