const k8s = require('@kubernetes/client-node');
const kubeConfig = new k8s.KubeConfig();
kubeConfig.loadFromDefault();

const k8sApi = kubeConfig.makeApiClient(k8s.CoreV1Api);

const getPodInfo = async (podName, namespace) => {
  try {
    const res = await k8sApi.readNamespacedPod(podName, namespace);
    const pod = res.body;

    const status = pod.status.phase;
    const ip = pod.status.podIP;
    const image = pod.spec.containers[0].image;
    const nodeSelectors = JSON.stringify(pod.spec.nodeSelector);
    const tolerations = pod.spec.tolerations;
    // const events = pod.status.conditions;

    const eventList = await k8sApi.listNamespacedEvent(
      namespace,
      undefined,
      undefined,
      undefined,
      undefined,
      `involvedObject.name=${podName}`,
    );
    const events = eventList.body.items;
    return {
      podName,
      namespace,
      status,
      ip,
      image,
      nodeSelectors,
      tolerations,
      events,
    };
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getPodInfo };
