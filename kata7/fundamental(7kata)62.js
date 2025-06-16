/*Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.*/


function findLongest(array){
  // code here
  let l = array.map(item => String(item).length)
  return array[l.indexOf(Math.max(...l))]
}