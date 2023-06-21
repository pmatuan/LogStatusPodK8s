const express = require('express');

const router = express.Router();

// Check the monitor pod is working or not
router.get('/hello', async (req, res) => {
  res.send("Hello World from Monitor\n");
});

module.exports = router;
