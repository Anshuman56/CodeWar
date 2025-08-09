/*For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000*/



function manipulate(num) { 
  let mid = Math.floor(num.toString().length / 2); // your code here 
  let first = num.toString().split('').splice(0, mid).join('');
  let last = num.toString().split('').slice(mid).map(item => '0').join('');
  return +(first + last);
} 