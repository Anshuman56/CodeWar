/*Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!*/


const sumSquareEvenRootOdd = ns => {
  // your code goes here
  let even = ns.filter(item => item % 2 === 0).map(item => item ** 2).reduce((acc, item) => acc + item, 0);
  let odd = ns.filter(item => item % 2 !== 0).map(item => Math.sqrt(item)).reduce((acc, item) => acc + item, 0);
  return Number((even + odd).toFixed(2));
  
};