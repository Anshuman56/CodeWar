/*You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}*/


function compoundArray(a, b) {
  // Your code here
  let result = [];
  let big = 0;
  if(a.length > b.length)
    big = a.length;
  else
    big = b.length;
  for(let i = 0; i < big; i++){
   if(!isNaN(a[i])) result.push(a[i]);
    if(!isNaN(b[i])) result.push(b[i]);
  }
  return result
}