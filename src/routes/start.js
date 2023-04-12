const express = require('express');
const { getIDStatusOfPod } = require('../services/k8s');
const router = express.Router();

router.get('/start', async (req, res) => {
  getIDStatusOfPod('my-deployment');
});

module.exports = router;
