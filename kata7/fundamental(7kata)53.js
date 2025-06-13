/*Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
Note that if the range is given in capital letters, return the string in capitals also!

Examples
"a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
"h-o" ➞ "hijklmno"
"Q-Z" ➞ "QRSTUVWXYZ"
"J-J" ➞ "J"*/


function gimmeTheLetters(sp) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let letter = sp.split('-');
  let first = str.indexOf(letter[0].toLowerCase());
    let last = str.indexOf(letter[1].toLowerCase());
  if(letter[0] === letter[0].toUpperCase()){
    return str.slice(first, last + 1).toUpperCase();
  }else{
    return str.slice(first, last + 1);
  }
}