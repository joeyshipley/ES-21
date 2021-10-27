export default {
  start,
}

function start(request) {
  return removeNonDigitValuesFrom(request);
}

function removeNonDigitValuesFrom(requestValue) {
  const scrubbedValue = requestValue.replace(/\D/g, '');
  return scrubbedValue ? scrubbedValue : null;
}
