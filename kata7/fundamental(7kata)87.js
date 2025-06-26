/*Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]*/


const orderedCount = function (text) {
  // Implement me!
  let result = [];
  let uniq = text.split('').filter((item, index, self) => self.indexOf(item) === index).join('');
  for(let i = 0; i < uniq.length; i++){
    let s =[]
    s.push(uniq[i])
    s.push(text.split('').filter(item => item === uniq[i]).length)
    result.push(s)
  }
  return result;
}