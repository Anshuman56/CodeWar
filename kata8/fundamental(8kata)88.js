/*Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string.*/

function padIt(str,n){
  //coding here
  let result = [str];
  let i = 1;
  while(i <= n){
    if(i % 2 === 0)
      result.push('*')
    else
      result.unshift('*')
     i++
  }
  return result.join('')
}