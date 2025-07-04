/*Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

Examples
454793 ---> "4547-9-3"
     0 ---> "0"
     1 ---> "1"
13579  ---> "1-3-5-7-9"
 86420 ---> "86420"*/

function insertDash(num) {
   //code me
  return String(num).split('').map(item => +item).map((item, index, self) => index  === 0?item: self[index - 1] % 2 !== 0 && item % 2 !== 0? '-'+item: item).join('')
}
