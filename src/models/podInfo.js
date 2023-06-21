const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  lastProbeTime: Date,
  lastTransitionTime: Date,
  message: String,
  reason: String,
  status: String,
  type: String,
});

const PodInfo = new mongoose.Schema(
  {
    podName: String,
    namespace: String,
    status: String,
    ip: String,
    image: String,
    nodeSelectors: String,
    tolerations: [
      {
        effect: String,
        key: String,
        operator: String,
        value: String,
      },
    ],
    events: [eventSchema],
  },
  {
    collection: 'PodInfo',
    versionKey: false,
  },
);

module.exports = {
  PodInfo: mongoose.model('PodInfo', PodInfo),
};
