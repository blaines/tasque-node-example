# tasque-node-example

## Build & Run
```
docker build -t tasque-node-example .
docker run --volume ~/.aws:/root/.aws -e TASK_QUEUE_URL='{aws-queue-url}' -e AWS_REGION='{aws-region}' tasque-node-example
```
