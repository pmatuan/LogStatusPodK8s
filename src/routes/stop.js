const express = require('express');
const { logRespone } = require('../daos/saveLog');
const router = express.Router();
const os = require('os');

router.get('/stop', async (req, res) => {
  const freeMemory = os.freemem();
  const hostname = os.hostname();

  await logRespone(freeMemory, hostname);

  res.json({
    freeMemory,
    hostname,
  });
});

module.exports = router;
