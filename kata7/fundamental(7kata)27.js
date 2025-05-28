/*The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.

Complete the function which accepts an array of integers and returns its magic sum of 3s.

Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

If there is no such number in the array, 0 should be returned.*/


function magicSum(numbers) {
  // TODO: Program Me
  return numbers.filter(item => String(item).includes('3')).filter(item => item % 2 !== 0).reduce((acc, item) => acc + item, 0);
}