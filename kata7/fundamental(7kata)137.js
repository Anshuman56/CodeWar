/*Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]*/



function reject(array, predicate) {
  //
let result = [];
  for (let i = 0; i < array.length; i++)
    result.push(!predicate(array[i]))
  let indexs = result.map((item, index) => item === true ? index: '').filter(item => item !== '');
  return indexs.map(item => array[item])
}