// const k8s = require('@kubernetes/client-node');
// const kubeConfig = new k8s.KubeConfig();
// kubeConfig.loadFromDefault();

// const k8sApi = kubeConfig.makeApiClient(k8s.CoreV1Api);
// const podName = 'pod-demo-57744c94f4-rc2gv';

// // Get the pod information
// k8sApi
//   .readNamespacedPod(podName, 'default')
//   .then((res) => {
//     console.log(res.body);
//     const startTime = res.body.status.startTime;
//     const containerStatuses = res.body.status.containerStatuses;
//     const container = containerStatuses[0];
//     const startedAt = container.lastState.terminated.startedAt;
//     const finishedAt = container.lastState.terminated.finishedAt;

//     console.log(`Pod Name: ${podName}`);
//     console.log(`Pod Started: ${startTime}`);
//     console.log(`Started At: ${startedAt}`);
//     console.log(`Finished At: ${finishedAt}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const k8s = require('@kubernetes/client-node');
const kubeConfig = new k8s.KubeConfig();
kubeConfig.loadFromDefault();

const k8sApi = kubeConfig.makeApiClient(k8s.CoreV1Api);
const podName = 'pod-demo-6bfb48765b-4xfp7';

const getPodInformation = async (podName) => {
  try {
    const res = await k8sApi.readNamespacedPod(podName, 'default');
    const startTime = res.body.status.startTime;
    const containerStatuses = res.body.status.containerStatuses;
    const container = containerStatuses[0];
    const startedAt = container.lastState.terminated.startedAt;
    const finishedAt = container.lastState.terminated.finishedAt;
    console.log(`Pod Name: ${podName}`);
    console.log(`Pod Started: ${startTime}`);
    console.log(`Started At: ${startedAt}`);
    console.log(`Finished At: ${finishedAt}`);
  } catch (err) {
    console.error(err);
  }
};

getPodInformation(podName);
