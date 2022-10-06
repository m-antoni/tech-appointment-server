const { ADD_CLIENT, UPDATE_CLIENT, DELETE_CLIENT } = require('./Client');
const {
  ADD_TECHNICIAN,
  UPDATE_TECHNICIAN,
  DELETE_TECHNCIAN,
} = require('./Technician');
const {
  ADD_APPOINTMENT,
  UPDATE_APPOINTMENT,
  DELETE_APPOINTMENT,
} = require('./Appointment');

const mutations = {};
mutations.ADD_CLIENT = ADD_CLIENT;
mutations.UPDATE_CLIENT = UPDATE_CLIENT;
mutations.DELETE_CLIENT = DELETE_CLIENT;
mutations.ADD_TECHNICIAN = ADD_TECHNICIAN;
mutations.UPDATE_TECHNICIAN = UPDATE_TECHNICIAN;
mutations.DELETE_TECHNCIAN = DELETE_TECHNCIAN;
mutations.ADD_APPOINTMENT = ADD_APPOINTMENT;
mutations.UPDATE_APPOINTMENT = UPDATE_APPOINTMENT;
mutations.DELETE_APPOINTMENT = DELETE_APPOINTMENT;

module.exports = mutations;