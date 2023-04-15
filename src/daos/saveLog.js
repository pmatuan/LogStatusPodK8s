const { LogStart, LogStop } = require('../models/log');

const logResponeStart = async (name, imageNameOfPod) => {
  try {
    const log = new LogStart({
      name,
      imageNameOfPod,
    });
    await log.save();
    console.log('Log saved to MongoDB');
  } catch (err) {
    console.log(err);
  }
}

const logResponeStop = async (name, podStart, containerStart, containerStop) => {
  try {
    const log = new LogStop({
      name,
      podStart,
      containerStart,
      containerStop,
    });
    await log.save();
    console.log('Log saved to MongoDB');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { logResponeStart, logResponeStop };
