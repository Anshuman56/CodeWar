/*Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial*/


function factorial(n){
  //your code here
  let f = [];
  if(n === 0)
    return 1;
  if(f[n] > 0)
   return f[n];
return f[n] = factorial(n - 1) * n ;
}