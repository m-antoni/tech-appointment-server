const { CLIENT, CLIENTS } = require('./Client');
const { TECHNICIAN, TECHNICIANS } = require('./Technician');
const { APPOINTMENT, APPOINTMENTS } = require('./Appointment');

const queries = {};
queries.TECHNICIAN = TECHNICIAN;
queries.TECHNICIANS = TECHNICIANS;
queries.CLIENT = CLIENT;
queries.CLIENTS = CLIENTS;
queries.APPOINTMENT = APPOINTMENT;
queries.APPOINTMENTS = APPOINTMENTS;

module.exports = queries;
