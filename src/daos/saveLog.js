const Log = require('../models/log');

const logRespone = async (id, status) => {
  try {
    const log = new Log({
      id,
      status,
    });
    await log.save();
    console.log('Log saved to MongoDB');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { logRespone };
