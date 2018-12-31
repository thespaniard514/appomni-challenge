const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  company: {
    type: String
  },
  jobTitle: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  notes: {
    type: String
  },
},{
  collection: 'contacts'
});

module.exports = mongoose.model('Contact', Contact);
