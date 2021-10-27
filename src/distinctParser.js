export default {
  removeDuplicates,
}

function removeDuplicates(entries) {
  if(!isValidRequest(entries)) { return null; }
  return makeCollectionDistinct(entries);
}

function isValidRequest(entries) {
  return !(!entries || !Array.isArray(entries));
}

function makeCollectionDistinct(entries) {
  return [ ...new Set(entries) ];
}
