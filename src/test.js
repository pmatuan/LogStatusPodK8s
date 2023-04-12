const k8s = require('@kubernetes/client-node');

// create a Kubernetes API client
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

// define the name prefix for the Pods
const namePrefix = 'my-deployment';

// list all Pods in the current namespace
k8sApi.listPodForAllNamespaces().then((res) => {
  const pods = res.body.items;

  // iterate through the Pods and filter by name prefix
  const filteredPods = pods.filter((pod) =>
    pod.metadata.name.startsWith(namePrefix)
  );

  // iterate through the filtered Pods and log ID and status
  filteredPods.forEach((pod) => {
    const podId = pod.metadata.uid;
    const podStatus = pod.status.phase;
    console.log(`Pod ID: ${podId}, Status: ${podStatus}`);
  });
}).catch((err) => {
  console.error(`Error: ${err}`);
});
