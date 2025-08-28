/*Write a program that outputs the top n elements from a list.

Example:

k = 2; list = [7, 6, 5, 4, 3, 2, 1]
==> [6, 7]*/



function largest(n, array) {
  // Find the n highest elements in a list
  let result = [];
  let arr = array.sort((a, b) => a - b)
  for(let i =1; i <= n; i++){
    result.push(arr[arr.length - i])
  }
  return result.sort((a, b) => a -b);
}