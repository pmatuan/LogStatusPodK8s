const mongoose = require('mongoose');

const LogStart = new mongoose.Schema(
  {
    name: String,
    imageNameOfPod: String
  },
  {
    collection: 'auditStart',
    versionKey: false,
  },
);

const LogStop = new mongoose.Schema(
  {
    name: String,
    podStart: Date,
    containerStart: Date,
    containerStop: Date
  },
  {
    collection: 'auditStop',
    versionKey: false,
  },
);

module.exports = {
  LogStart: mongoose.model('LogStart', LogStart),
  LogStop: mongoose.model('LogStop', LogStop)
};
