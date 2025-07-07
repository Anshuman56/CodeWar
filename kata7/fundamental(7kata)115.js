function arrange(arr){
/*Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.*/



//Insert code here

let g = [];
  let kg = [];
  let t = [];
  arr.forEach(item => item.includes('KG')?kg.push(item):item.includes('G')?g.push(item):t.push(item))
let result =[];
  g.map(item => item.split('').filter(item => item !== 'G').join('')).sort((a, b) => a -b).map(item=> item+'G').forEach(item => result.push(item));
  kg.map(item => item.split('').filter(item => item !== 'G').filter(item => item !== 'K').join('')).sort((a, b) => a -b).map(item=> item+'KG').forEach(item => result.push(item));
  t.map(item => item.split('').filter(item => item !== 'T').join('')).sort((a, b) => a -b).map(item=> item+'T').forEach(item => result.push(item));
  return result;
  
}