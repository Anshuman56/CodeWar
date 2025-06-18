/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!*/


function capitalize(s){
  let first = '';
  let second = ''
  for(let i = 0; i < s.length; i++){
    if(i % 2 === 0){
      first += s[i].toUpperCase()
    }else
      first += s[i];
  }
  for(let i = 0; i < s.length; i++){
    if(i % 2 !== 0){
      second += s[i].toUpperCase()
    }else
      second += s[i];
  }
  return [first, second];
};