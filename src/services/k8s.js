const { logResponeStart, logResponeStop } = require('../daos/saveLog');
const k8s = require('@kubernetes/client-node');
const kubeConfig = new k8s.KubeConfig();
kubeConfig.loadFromDefault();

const k8sApi = kubeConfig.makeApiClient(k8s.CoreV1Api);

const getPodInformationStart = async (podName) => {
  try {
    const res = await k8sApi.readNamespacedPod(podName, 'default');
    const container = res.body.spec.containers[0]; // assumes only 1 container in the pod
    const imageNameOfPod = container.image;
    await logResponeStart(podName, imageNameOfPod);
  } catch (err) {
    console.error(err);
  }
};

const getPodInformationStop = async (podName) => {
  try {
    const res = await k8sApi.readNamespacedPod(podName, 'default');
    const podStart = res.body.status.startTime;
    const containerStatuses = res.body.status.containerStatuses;
    const container = containerStatuses[0];
    const containerStart = container.lastState.terminated.startedAt;
    const containerStop = container.lastState.terminated.finishedAt;
    await logResponeStop(podName, podStart, containerStart, containerStop);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getPodInformationStart, getPodInformationStop };
