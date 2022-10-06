const Appointment = require('./Appointment');
const Client = require('./Client');
const Technician = require('./Technician');

const db = {};
db.Appointment = Appointment;
db.Client = Client;
db.Technician = Technician;

module.exports = db;
