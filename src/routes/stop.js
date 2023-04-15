const express = require('express');

const { getPodInformationStop } = require('../services/k8s');
const router = express.Router();

router.use(express.json()); 
router.use(express.urlencoded({ extended: true })); 

router.post('/stop', async (req, res) => {
  await getPodInformationStop(req.body.podName);
});

module.exports = router;
