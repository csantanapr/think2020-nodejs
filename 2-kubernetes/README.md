# Demo to show Kubernetes

## Setup
- Download [skaffold](https://skaffold.dev/)
- Configure Docker Desktop
- Configure Kubernetes/OpenShift cluster CLI access

## Run
```bash
cd 2-kubernetes/
skaffold dev
```

Using OpenShift internal registry doesn't work as the Pod must reference the internal hostanme image-registry.openshift-image-registry.svc:5000.
Easier way is to use external registry:
1. `skaffold config set default-repo quay.io/csantanapr`
2. `oc create secret docker-registry regcred --docker-username=csantanapr --docker-password=‘<PASSWORD>’ --docker-server=quay.io`
3. Add regcred secret as pull secret to service account (ie default)
Replace `csatanapr` with your quay account
