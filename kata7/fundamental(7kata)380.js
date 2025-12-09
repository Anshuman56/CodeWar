/*Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3])  ==> [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]])  ==> [[1,2,3]]*/


function flatten(array) {
  // TODO: Program me
  let result = [];
  array.forEach(item => Array.isArray(item)? item.forEach(i => result.push(i)): result.push(item));
  return result;
}