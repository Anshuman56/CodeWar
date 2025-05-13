/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

*/

function isVow(a){
  return a.map(item => item === 'u'.charCodeAt(0)? 'u':item === 'a'.charCodeAt(0)? 'a':item === 'i'.charCodeAt(0)? 'i': item === 'o'.charCodeAt(0)? 'o':item === 'e'.charCodeAt(0)? 'e': item);// your code here
}