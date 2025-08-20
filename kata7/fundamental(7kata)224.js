/*Code a function which will return an array with all prime numbers smaller than or equal to an arbitrary parameter "n".

Assume that all parameters will be numbers.

Remember that in some test cases with a big enough "n", performance might be (more) important.

*/


var primeArray = function(n) {
  var primeArray = [];
  // fill it with primes up to 'n'
 const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
  for(let i = 0; i <= n; i++){
    if(isPrime(i))
      primeArray.push(i)
  }
  return primeArray;
}