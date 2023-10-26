import { createClient } from 'redis';
import express from 'express';
import getThrottleState from './getThrottleState.js';
import evaluateThrottleState from './evaluateThrottleState.js';

const app = express()
app.use(getThrottleState);
app.use(evaluateThrottleState);

const hostname = 'localhost';
const port = 3000;
 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// connect to Redis & set throttleState
const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));
client.connect().then(async () => {
    // todo - get throttlestate from backend DB
    await client.set('throttleState', 'SERVICE_UP');
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

export {client};