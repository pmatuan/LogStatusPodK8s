const express = require('express');

const router = express.Router();

router.get('/hello', async (req, res) => {
  res.send("Hello Monitor");
});

module.exports = router;
