/*Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"*/


function checkThreeAndTwo(array) {
  //your code here
  let a = array.filter(item => item === 'a');
  let b = array.filter(item => item === 'b');
  let c = array.filter(item => item === 'c');
  return a.length === 3 && b.length === 2 || a.length === 3 && c.length === 2 ||b.length === 3 && a.length === 2||b.length === 3 && c.length === 2||c.length === 3 && a.length === 2||c.length === 3 && b.length === 2
  
}