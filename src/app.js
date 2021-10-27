import inputParser from './inputParser';
import distinctParser from './distinctParser';

export default {
  lookupSpecialtyNames,
}

const specialtyNamesDataset = [
  [1381, "front-end web development"],
  [8235, "data engineering"],
  [3434, "API design"],
  [7623, "security"],
  [9153, "UX"]
];

function lookupSpecialtyNames(requestIds) {
  const parsedIds = requestIds.map((request) => inputParser.removeInvalid(request));
  const distinctIds = distinctParser.removeDuplicates(parsedIds);

  return [ ...distinctIds ];
}

// NOTE: wamp-wamp-wamp... ran out of time.
// function lookupNamesFor(ids) {
//   const results = ids.map((id) => {
//     specialtyNamesDataset.find((record) => record[0] ==
//   });
// }
