/*Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"*/

function sevenAte9(str) {
  return str.split('').filter((item, index, self) => !(item === '9' && self[index - 1] === '7' && self[index + 1] === '7')).join('')
}