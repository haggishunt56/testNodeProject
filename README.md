This repo is created to showcase creating a redis connection and evaluating throttleState in every incoming request.

The redis connection is created on startup (command: node index.mjs). The getThrottleState gets the throttle state from Redis and stores it in req.query. Another middleware, evaluateThrottleState gets this value and decides whether to show a shutter screen or continue processing the request.

When used for real, the throttle state will come from a backend DB which is updated by a Jenkins file. For this demo it is hardcoded into index.js