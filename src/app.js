import inputParser from './inputParser';
export default {
  start,
}

function start(request) {
  return inputParser.removeInvalid(request);
}
