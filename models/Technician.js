const mongoose = require('mongoose');

const TechnicianSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('Technician', TechnicianSchema);
