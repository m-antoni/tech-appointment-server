const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const Technician = require('../../models/Technician');
const { TECHNICIAN_TYPE } = require('../typedefs/_index');

const ADD_TECHNICIAN = {
  type: TECHNICIAN_TYPE,
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
};

const DELETE_TECHNCIAN = {
  type: TECHNICIAN_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Technician.findByIdAndRemove(args.id);
  },
};

const UPDATE_TECHNICIAN = {
  type: TECHNICIAN_TYPE,
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
};

module.exports = {
  ADD_TECHNICIAN,
  DELETE_TECHNCIAN,
  UPDATE_TECHNICIAN,
};
