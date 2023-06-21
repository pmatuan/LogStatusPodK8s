const { PodInfo } = require('../models/podInfo');

const deletePodInfo = async (podName, namespace) => {
  try {
    const filter = { podName, namespace };
    const result = await PodInfo.findOneAndDelete(filter);
    console.log('Record deleted from MongoDB');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { deletePodInfo };
