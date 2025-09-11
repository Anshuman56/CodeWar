/*Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example, given the following array:

[34.5, 56.2, 11, 13]
should return

[35, 55, 10, 15]*/


// return the list with all numbers rounded to nearest 0 or 5
function roundToFive(numbers){
  return numbers.map(item => Math.round(item / 5) * 5)
}