export default {
  start,
}

function start(request) {
  if(!isValidRequest(request)) { return null; }

  return removeNonDigitValuesFrom(request);
}

function isValidRequest(request) {
  return !(!request || typeof request != 'string');
}

function removeNonDigitValuesFrom(requestValue) {
  const scrubbedValue = requestValue.replace(/\D/g, '');
  return scrubbedValue ? scrubbedValue : null;
}
