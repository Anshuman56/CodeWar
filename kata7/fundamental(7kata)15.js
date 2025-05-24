/*Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.*/


function cubeOdd(arr) {

// insert code here >.<
for(let i = 0; i < arr.length; i++){
  if(typeof arr[i] !== 'number' )
    return undefined;
}

return arr.filter(item => item % 2 !== 0).reduce((acc, item) => acc + item ** 3, 0);
}