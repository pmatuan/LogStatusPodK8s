const express = require('express');

const { getPodInformationStart } = require('../services/k8s');
const router = express.Router();

router.use(express.json()); 
router.use(express.urlencoded({ extended: true })); 

router.post('/start', async (req, res) => {
  await getPodInformationStart(req.body.podName);
});

module.exports = router;
