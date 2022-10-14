const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  schedule_date: {
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
