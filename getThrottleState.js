import { client } from './index.mjs';

async function getThrottleState (req, res, next) {
    try {
        // get throttle state and store in request
        req.query.throttleState = await client.get('throttleState');

        next();
    } catch (error) {
        // Handle errors if necessary
        console.error('Error in getThrottleState custom middleware:', error);
        res.status(500).send('Internal Server Error');
    };
}

  export default getThrottleState;