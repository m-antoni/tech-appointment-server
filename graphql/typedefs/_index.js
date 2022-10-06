const ClientTypeInject = require('./ClientType');
const TechnicianTypeInject = require('./TechnicianType');
const AppointmentTypeInject = require('./AppointmentType');

const types = {};
types.ClientType = ClientTypeInject(types);
types.TechnicianType = TechnicianTypeInject(types);
types.AppointmentType = AppointmentTypeInject(types);

// ALL TYPES
const CLIENT_TYPE = types.ClientType;
const TECHNICIAN_TYPE = types.TechnicianType;
const APPOINTMENT_TYPE = types.AppointmentType;

module.exports = { CLIENT_TYPE, TECHNICIAN_TYPE, APPOINTMENT_TYPE };
