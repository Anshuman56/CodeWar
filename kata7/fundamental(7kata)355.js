/*Create an algorithm to count the number of zeros that appear between 1 and N.

Examples
 10  -->   1  // 10
 20  -->   2  // 10, 20
100  -->  11  // 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
200  -->  31*/


function countZeros(n) {
  // code here
  let result = [];
  for(let i = 1; i <= n; i++){
    if(String(i).includes(0))
      result.push(i)
  }
  return result.join('').split('').filter(item => item === '0').length;
}