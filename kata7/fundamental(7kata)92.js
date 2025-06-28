/*When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.*/


function swap (string) {
  let v = 'aioue';
  return string.split('').map(item => v.includes(item)? item.toUpperCase(): item).join('');
}