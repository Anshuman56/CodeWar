/*Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.*/


function consonantCount(str) {
  // ...
  return str.toLowerCase().split('').filter(item => item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122).filter(item => !'aioue'.includes(item)).length
}