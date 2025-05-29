/*In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"*/


function calculate(str) {
//your code here...
  let expresion = '';
  if(str.includes('plus') && str.includes('minus')){
     if(str.includes('plus')){
    str = str.split('plus').join('+');
    }
    if(str.includes('minus')){
    expresion = str.split('minus').join('-')
    }
  }
  else {
      if(str.includes('plus')){
    expresion = str.split('plus').join('+');
    }
    if(str.includes('minus')){
    expresion = str.split('minus').join('-')
    }
  }
 
 
   
  return eval(expresion).toString()
}