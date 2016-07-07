'use strict';
console.log("region: ", process.env.AWS_REGION);
console.log("queue: ", process.env.TASK_QUEUE_URL);
console.log("payload: ", JSON.parse(process.env.TASK_PAYLOAD));
console.log("id: ", process.env.TASK_ID);

console.log("Hello World. Task Complete.");
