/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

*/


function divCon(x){
let numTotal = x.filter(item => typeof item === 'number').reduce((acc, item) => acc + item, 0);
let strTotal = x.filter(item => typeof item !== 'number').reduce((acc, item) => acc + Number(item), 0);
return numTotal - strTotal
}