const express = require('express');
const { getPodInfo } = require('../services/k8s');
const { savePodInfo } = require('../daos/savePodInfo');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/start', async (req, res) => {
  res.send('Success');
  
  setTimeout(async () => {
    const {
      podName,
      namespace,
      status,
      ip,
      image,
      nodeSelectors,
      tolerations,
      events,
    } = await getPodInfo(req.body.podName, req.body.namespace);

    await savePodInfo(
      podName,
      namespace,
      status,
      ip,
      image,
      nodeSelectors,
      tolerations,
      events,
    );
  }, 15000);
});

module.exports = router;
