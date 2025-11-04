/*Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
Confused? Roll your mouse/tap over here*/


function addLetters(...letters) {
  // your code here
  if(letters.length === 0)
    return 'z';
  let alp = 'abcdefghijklmnopqrstuvwxyz';
  let i = letters.map(item => alp.indexOf(item) + 1).reduce((acc, item) => acc + item, 25);
  return alp[i % 26]
}