const express = require('express');
const { deletePodInfo } = require('../daos/deletePodInfo');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/stop', async (req, res) => {
  res.send("Success");
  await deletePodInfo(req.body.podName, req.body.namespace);
});

module.exports = router;
