/*Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3*/


function strCount(obj){
// Your code here
 let stringNumber = 0;
  for(let item in obj){
   
    if(typeof obj[item] === 'string')
      stringNumber += 1;
    
     if(typeof obj[item] === 'object'){
    stringNumber += strCount(obj[item])
    }
  }
  return stringNumber;
}