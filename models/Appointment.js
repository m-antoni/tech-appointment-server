const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  receipt_no: {
    type: String,
  },
  schedule_date: {
    type: String,
  },
  service_type: {
    type: String,
  },
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  technician_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Technician',
  },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);