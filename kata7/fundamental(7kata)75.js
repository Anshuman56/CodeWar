/*Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.*/


function moveTen(s){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  
 return s.split('').map(item => alpha.indexOf(item)+10).map(item => item >= 26? item - 26: item).map(item =>alpha[''+item]).join('')
}