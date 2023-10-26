const evaluateThrottleState = (req, res, next) => {
  const successMessage = 'SERVICE_UP';
  console.log(req.query);

  if (req.query.throttleState !== successMessage) {
    // show shutter screen and do not process any more requests
    console.log('show shutter screen');

    // todo - res.status(503).render('serviceUnavailablePage);
  }

  // else continue to next middleware
  next();
}

export default evaluateThrottleState;