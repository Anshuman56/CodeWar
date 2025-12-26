/*Write a function that given an integer n >= 0, returns an array of n ascending length subarrays, all filled with 1s.

0 => [ ]
1 => [ [1] ]
2 => [ [1], [1, 1] ]
3 => [ [1], [1, 1], [1, 1, 1] ]*/


function pyramid(n) {
  // your code here
  let result = [];
  for(let i = 0; i < n; i++){
    let s = [];
    for(let j = 0; j <= i; j++){
      s.push(1)
    }
    result.push(s)
  }
  return result;
}