/*You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.*/

function matchArrays(v,r){
  let result = [];
  for(let i = 0; i < v.length; i++){
    for(let j = 0; j < r.length; j++){
       if(v[i] === r[j])
         result.push(r[j])
    }
  }
 return result.length;
}