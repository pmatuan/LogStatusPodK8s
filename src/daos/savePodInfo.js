const { PodInfo } = require('../models/podInfo');

const savePodInfo = async (
  podName,
  namespace,
  status,
  ip,
  image,
  nodeSelectors,
  tolerations,
  events,
) => {
  try {
    const filter = { podName, namespace };
    const update = { status, ip, image, nodeSelectors, tolerations, events };
    const options = { upsert: true, new: true };

    const result = await PodInfo.findOneAndUpdate(filter, update, options);
    console.log('Log saved to MongoDB');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { savePodInfo };
