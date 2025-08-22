/*Given an array of strings, write a function that returns an array containing only the elements of the given array whose length is an even number.

Example
["One", "Two", "Three", "Four"] --> ["Four"]*/


function filterEvenLengthWords(words) {
  // your code here
  return words.filter(item => item.length % 2 === 0)
}