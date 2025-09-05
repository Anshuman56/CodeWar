/*There is a sentence that has a mistake in its ordering.

The part with a capital letter should be the first word.

Please write a function to re-order the words, so that the word starting with a capital letter is moved to the front.

Each word in the string is separated by a single space.

In the string, there will always be exactly one word with a capital letter in it.

Examples
"ming Yao" --> "Yao ming"
"Mano donowana" --> "Mano donowana"
"wario LoBan hello" --> "LoBan wario hello"
"bull color pig Patrick" --> "Patrick bull color pig"*/


function reOrdering(text){
  let c = text.split(' ').filter(item => item[0] === item[0].toUpperCase()).join(' ')
  let rest = text.split(' ').filter(item => item[0] !== item[0].toUpperCase()).join(' ')
  if(rest === '')
    return c;
  return c + ' ' + rest; // your code here
}