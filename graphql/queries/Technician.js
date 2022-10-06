const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const Technician = require('../../models/Technician');
const { TECHNICIAN_TYPE } = require('../typedefs/_index');

const TECHNICIANS = {
  type: new GraphQLList(TECHNICIAN_TYPE),
  resolve(parent, args) {
    return Technician.find();
  },
};

const TECHNICIAN = {
  type: TECHNICIAN_TYPE,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Technician.findById(args.id);
  },
};

module.exports = {
  TECHNICIANS,
  TECHNICIAN,
};
