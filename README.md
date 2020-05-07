# IBM THINK2020 Node.js

Examples used during IBM THINK2020 on "Lessons learned for Cloud Native Apps using Node.js"

Video and Charts available [here](https://www.ibm.com/events/think/watch/replay/126578182/)

- [Containers](./1-containers)
```
cd 1-containers/
docker build -t ui .
docker run --rm -p 8080:8080 ui
```
- [Kubernetes](./2-kubernetes)
```
cd 2-kubernetes/
skaffold dev
```
- [Operations](./3-operations)
```
cd 3-operations/
skaffold dev
```