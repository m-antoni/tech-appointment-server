const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql');
const Technician = require('../../models/Technician');
const { TechnicianType } = require('../type-defs');
// const { TechnicianType } = require('../typedefs/TechnicianType');

const TECHNICIANS = {
  type: new GraphQLList(TechnicianType),
  resolve(parent, args) {
    return Technician.find();
  },
};

const TECHNICIAN = {
  type: TechnicianType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    return Technician.findById(args.id);
  },
};

module.exports = {
  TECHNICIANS,
  TECHNICIAN,
};
