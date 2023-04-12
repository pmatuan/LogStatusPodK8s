const k8s = require('@kubernetes/client-node');
const { logRespone } = require('../daos/saveLog');

const getIDStatusOfPod = async (namePrefix) => {
  try {
    // create a Kubernetes API client
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    // list all Pods in the current namespace
    const res = await k8sApi.listPodForAllNamespaces();

    const pods = res.body.items;

    // iterate through the Pods and filter by name prefix
    const filteredPods = pods.filter((pod) =>
      pod.metadata.name.startsWith(namePrefix),
    );

    // iterate through the filtered Pods and log ID and status
    for (const pod of filteredPods) {
      const podId = pod.metadata.uid;
      const podStatus = pod.status.phase;
      await logRespone(podId, podStatus);
    }
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

module.exports = { getIDStatusOfPod };
