import _ from "lodash";

export function filterInteraction(arr1, arr2) {
  return _.intersection(arr1, arr2);
}
