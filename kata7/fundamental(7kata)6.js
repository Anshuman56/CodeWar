/*You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].*/

function explode(x){
  let newArr = [];
   let length = 0;
if(typeof x[0] === 'string' && typeof x[1] === 'string')
  return 'Void!';
else{
  if(typeof x[0] === 'number' && typeof x[1] === 'number'){
    length = x.reduce((acc, item) => acc + item, 0);
  
  for(let i = 0; i < length; i++){
    newArr.push(x);
  }
  return newArr;
  }
  else{
    if(typeof x[0] === 'number'){
      length = x[0]
       for(let i = 0; i < length; i++){
         newArr.push(x);
       }
      return newArr;
    }
    else{
      length = x[1]
       for(let i = 0; i < length; i++){
         newArr.push(x);
       }
      return newArr;
    }
  }

}