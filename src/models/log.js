const mongoose = require('mongoose');

const Log = new mongoose.Schema(
  {
    id: String,
    status: String,
  },
  {
    collection: 'audit',
    versionKey: false,
  },
);

module.exports = mongoose.model('Log', Log);